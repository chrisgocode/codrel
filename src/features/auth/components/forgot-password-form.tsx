"use client";

import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

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
import { encodedRedirect } from "@/utils/utils";
import { toast } from "sonner";
import { paths } from "@/config/path";
import { requestPasswordResetAction } from "@/app/actions";
import { useState } from "react";

export const forgotPasswordFormSchema = z.object({
  email: z.string().email().min(1, {
    message: "Email is required",
  }),
});

export default function ForgotPasswordForm() {
  const [isLoading, setIsLoading] = useState(false);

  const forgotPasswordForm = useForm<z.infer<typeof forgotPasswordFormSchema>>({
    resolver: zodResolver(forgotPasswordFormSchema),
    defaultValues: {
      email: "",
    },
  });

  const onSubmit = async (data: z.infer<typeof forgotPasswordFormSchema>) => {
    setIsLoading(true);
    const result = await requestPasswordResetAction(data);

    if (result && result.success) {
      toast.success(result.message || "Sign in successful!");
      encodedRedirect(
        "success",
        paths.home.getHref(),
        result.message || "Sign in successful!"
      );
    } else if (result && result.error) {
      toast.error(result.error);
    } else {
      toast.error("An unexpected error occurred during sign in.");
    }
    setIsLoading(false);
  };

  return (
    <Form {...forgotPasswordForm}>
      <form
        onSubmit={forgotPasswordForm.handleSubmit(onSubmit)}
        className="space-y-6"
      >
        <FormField
          control={forgotPasswordForm.control}
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
        <Button
          type="submit"
          className="w-full bg-amber-500 hover:bg-amber-600 text-white"
        >
          {isLoading ? "Sending reset link..." : "Send reset link"}
        </Button>
      </form>
    </Form>
  );
}
