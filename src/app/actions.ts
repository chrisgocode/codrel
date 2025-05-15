"use server";

import { paths } from "@/config/path";
import { createClient } from "@/utils/supabase/server";
import { encodedRedirect } from "@/utils/utils";
import { headers } from "next/headers";

import { z } from "zod";
import { registerFormSchema } from "@/features/auth/components/register-form";
import { loginFormSchema } from "@/features/auth/components/login-form";
import { forgotPasswordFormSchema } from "@/features/auth/components/forgot-password-form";
import { resetPasswordFormSchema } from "@/features/auth/components/reset-password-form";

export const signUpAction = async (
  data: z.infer<typeof registerFormSchema>
) => {
  const email = data.email;
  const password = data.password;
  const username = data.username;
  const supabase = await createClient();
  const origin = (await headers()).get("origin");

  if (!email || !password || !username) {
    encodedRedirect(
      "error",
      paths.auth.register.getHref(),
      "Missing required fields"
    );
  } else {
    const { error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        emailRedirectTo: `${origin}/auth/callback`,
        data: {
          username: username,
          signup_flow_type: "email_confirmation",
        },
      },
    });

    if (error) {
      return { success: false, error: error.message };
    } else {
      console.log("Sign up successful, pending email confirmation.");
      return {
        success: true,
        message: "Confirmation email sent. Please check your inbox.",
      };
    }
  }
};

export const signInAction = async (data: z.infer<typeof loginFormSchema>) => {
  const email = data.email;
  const password = data.password;
  const supabase = await createClient();

  if (!email || !password) {
    encodedRedirect(
      "error",
      paths.auth.login.getHref(),
      "Missing required fields"
    );
  } else {
    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      return { success: false, error: error.message };
    } else {
      console.log("Sign in successful");
      return { success: true, message: "Sign in successful! Redirecting..." };
    }
  }
};

export const requestPasswordResetAction = async (
  data: z.infer<typeof forgotPasswordFormSchema>
) => {
  const email = data.email;
  const supabase = await createClient();
  const origin = (await headers()).get("origin");

  if (!email) {
    encodedRedirect(
      "error",
      paths.auth.reset.forgotPassword.getHref(),
      "Missing required fields"
    );
  } else {
    const { error } = await supabase.auth.resetPasswordForEmail(email, {
      redirectTo: `${origin}/auth/reset-password`,
    });

    if (error) {
      return { success: false, error: error.message };
    } else {
      return { success: true, message: "Password reset link sent" };
    }
  }
};

export const resetPasswordAction = async (
  data: z.infer<typeof resetPasswordFormSchema>
) => {
  const newPassword = data.password;
  const supabase = await createClient();

  // The user should be authenticated at this point by having clicked the link
  // that navigated them to the page with ResetPasswordForm
  const { error } = await supabase.auth.updateUser({
    password: newPassword,
  });

  if (error) {
    return { success: false, error: error.message };
  } else {
    // It's important to sign out the user after a password reset
    // to ensure all sessions are invalidated.
    await supabase.auth.signOut();
    return {
      success: true,
      message: "Password updated successfully. Please sign in again.",
    };
  }
};
