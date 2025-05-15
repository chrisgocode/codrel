"use client";

import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { useRouter } from "next/navigation";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import { paths } from "@/config/path";
import { signInAction } from "@/app/actions";
import { useState } from "react";

export const loginFormSchema = z.object({
  email: z.string().email().min(1, {
    message: "Email is required",
  }),
  password: z.string().min(1, {
    message: "Password is required",
  }),
});

export default function LoginForm() {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const loginForm = useForm<z.infer<typeof loginFormSchema>>({
    resolver: zodResolver(loginFormSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async (data: z.infer<typeof loginFormSchema>) => {
    try {
      setIsLoading(true);
      const result = await signInAction(data);

      if (result?.success) {
        toast.success(result.message || "Sign in successful!");
        const redirectPath = `${paths.home.getHref()}?success=${encodeURIComponent(
          result.message || "Sign in successful!"
        )}`;
        router.push(redirectPath);
      } else if (result?.error) {
        toast.error(result.error);
      } else {
        toast.error("An unexpected error occurred during sign in.");
      }
    } catch (err: unknown) {
      toast.error("Unable to sign in. Please try again.");
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Form {...loginForm}>
      <form onSubmit={loginForm.handleSubmit(onSubmit)} className="space-y-6">
        <FormField
          control={loginForm.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-gray-700">Email</FormLabel>
              <FormControl>
                <Input
                  placeholder="Email"
                  {...field}
                  className="border-amber-200 focus:border-amber-500 focus:ring-amber-500"
                />
              </FormControl>
              <FormMessage className="text-red-500" />
            </FormItem>
          )}
        />
        <FormField
          control={loginForm.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-gray-700">Password</FormLabel>
              <FormControl>
                <Input
                  type="password"
                  placeholder="Password"
                  {...field}
                  className="border-amber-200 focus:border-amber-500 focus:ring-amber-500"
                />
              </FormControl>
              <FormMessage className="text-red-500" />
            </FormItem>
          )}
        />
        <div className="text-sm text-right">
          <Link
            href={paths.auth.reset.forgotPassword.getHref()}
            className="font-medium text-amber-600 hover:text-amber-500"
          >
            Forgot password?
          </Link>
        </div>
        <Button
          type="submit"
          className="w-full bg-amber-500 hover:bg-amber-600 text-white"
        >
          {isLoading ? "Signing in..." : "Sign In"}
        </Button>
      </form>
    </Form>
  );
}
