"use client";

import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { signUpAction } from "@/app/actions";
import { toast } from "sonner";
import { paths } from "@/config/path";
import { encodedRedirect } from "@/utils/utils";
import { useState } from "react";

export const registerFormSchema = z
  .object({
    email: z.string().email().min(1, {
      message: "Email is required",
    }),
    username: z.string().min(3, {
      message: "Username must be at least 3 characters long",
    }),
    password: z.string().min(8, {
      message: "Password must be at least 8 characters long",
    }),
    confirmPassword: z.string().min(8),
  })
  .superRefine(({ confirmPassword, password }, ctx) => {
    if (confirmPassword !== password) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: "Passwords do not match",
      });
    }
  });

export default function RegisterForm() {
  const [isLoading, setIsLoading] = useState(false);

  const registerForm = useForm<z.infer<typeof registerFormSchema>>({
    resolver: zodResolver(registerFormSchema),
    defaultValues: {
      email: "",
      username: "",
      password: "",
      confirmPassword: "",
    },
  });

  const onSubmit = async (data: z.infer<typeof registerFormSchema>) => {
    setIsLoading(true);
    const result = await signUpAction(data);

    if (result && result.success) {
      toast.success(result.message || "Sign up successful!");
      encodedRedirect(
        "success",
        paths.home.getHref(),
        result.message || "Sign up successful!"
      );
    } else if (result && result.error) {
      toast.error(result.error);
    } else {
      toast.error("An unexpected error occurred during sign up.");
    }
    setIsLoading(false);
  };

  return (
    <Form {...registerForm}>
      <form
        onSubmit={registerForm.handleSubmit(onSubmit)}
        className="space-y-6"
      >
        <FormField
          control={registerForm.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-gray-700">Email</FormLabel>
              <FormControl>
                <Input
                  placeholder="Email*"
                  {...field}
                  className="border-amber-200 focus:border-amber-500 focus:ring-amber-500"
                />
              </FormControl>
              <FormDescription className="text-gray-500 text-xs">
                We&apos;ll never share your email with anyone else.
              </FormDescription>
              <FormMessage className="text-red-500" />
            </FormItem>
          )}
        />
        <FormField
          control={registerForm.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-gray-700">Username</FormLabel>
              <FormControl>
                <Input
                  placeholder="Username*"
                  {...field}
                  className="border-amber-200 focus:border-amber-500 focus:ring-amber-500"
                />
              </FormControl>
              <FormDescription className="text-gray-500 text-xs">
                This will be displayed on your profile.
              </FormDescription>
              <FormMessage className="text-red-500" />
            </FormItem>
          )}
        />
        <FormField
          control={registerForm.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-gray-700">Password</FormLabel>
              <FormControl>
                <Input
                  type="password"
                  placeholder="Password*"
                  {...field}
                  className="border-amber-200 focus:border-amber-500 focus:ring-amber-500"
                />
              </FormControl>
              <FormDescription className="text-gray-500 text-xs">
                Must be at least 8 characters long.
              </FormDescription>
              <FormMessage className="text-red-500" />
            </FormItem>
          )}
        />
        <FormField
          control={registerForm.control}
          name="confirmPassword"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-gray-700">Confirm Password</FormLabel>
              <FormControl>
                <Input
                  type="password"
                  placeholder="Confirm Password*"
                  {...field}
                  className="border-amber-200 focus:border-amber-500 focus:ring-amber-500"
                />
              </FormControl>
              <FormMessage className="text-red-500" />
            </FormItem>
          )}
        />
        <Button
          type="submit"
          className="w-full bg-amber-500 hover:bg-amber-600 text-white"
        >
          {isLoading ? "Signing up..." : "Create Account"}
        </Button>
      </form>
    </Form>
  );
}
