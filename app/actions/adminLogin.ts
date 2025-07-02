"use server";
import { createClient } from "./../utils/server";
export const adminLogin = async ({
  email,
  password,
}: {
  email: string;
  password: string;
}) => {
  const supabase = await createClient();
  const { data, error } = await supabase.auth.signInWithPassword({
    email: email,
    password: password,
  });
  if (error) {
    return {
      success: false,
      error: error.message,
      data: null,
    };
  }

  return {
    success: true,
    error: false,
    data: data,
  };
};
