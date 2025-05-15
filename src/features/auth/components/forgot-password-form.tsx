"use client";

import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
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
import { requestPasswordResetAction } from "@/app/actions";
import { useState } from "react";

export const forgotPasswordFormSchema = z.object({
  email: z.string().email().min(1, {
    message: "Email is required",
  }),
});

export default function ForgotPasswordForm() {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const forgotPasswordForm = useForm<z.infer<typeof forgotPasswordFormSchema>>({
    resolver: zodResolver(forgotPasswordFormSchema),
    defaultValues: {
      email: "",
    },
  });

  const onSubmit = async (data: z.infer<typeof forgotPasswordFormSchema>) => {
    try {
      setIsLoading(true);
      const result = await requestPasswordResetAction(data);

      if (result?.success) {
        toast.success(
          result.message || "Password reset link sent successfully!"
        );
        const redirectPath = `${paths.home.getHref()}?success=${encodeURIComponent(
          result.message || "Password reset link sent successfully!"
        )}`;
        router.push(redirectPath);
      } else if (result?.error) {
        toast.error(result.error);
      } else {
        toast.error(
          "An unexpected error occurred during password reset request."
        );
      }
    } catch (err: unknown) {
      toast.error("Unable to request password reset. Please try again.");
      console.error(err);
    } finally {
      setIsLoading(false);
    }
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
