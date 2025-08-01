"use server";
import { redirect } from "next/navigation";
import { createClient } from "../utils/server";

export async function logout() {
  const supabase = await createClient();
  const { error } = await supabase.auth.signOut();
  if (!error) {
    console.log("successfully logged out!");
    redirect("/admin");
  }
}
