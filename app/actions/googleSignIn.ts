"use server";

import { createClient } from "../utils/server";

export async function googleSignIn(): Promise<{
  success: boolean;
  error: string | null;
  url: string | null;
}> {
  const supabase = await createClient();
  const { data } = await supabase.auth.signInWithOAuth({
    provider: "google",
    options: {
      redirectTo: `http://localhost:3000/admin/dashboard`,
    },
  });

  if (!data.url) {
    return {
      success: false,
      error: "Session is expired",
      url: null,
    };
  }

  return {
    success: true,
    url: data.url,
    error: null,
  };
}
