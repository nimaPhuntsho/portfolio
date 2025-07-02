import { createClient } from "@/app/utils/server";
import { redirect } from "next/navigation";

import React from "react";
import BlogForm from "@/app/components/BlogForm";

const Dashboard = async () => {
  const supabase = await createClient();
  const { data } = await supabase.auth.getSession();
  if (!data.session) redirect("/admin");

  return (
    <>
      <BlogForm />
    </>
  );
};

export default Dashboard;
