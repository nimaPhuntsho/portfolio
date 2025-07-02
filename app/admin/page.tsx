import React from "react";
import AdminLogin from "../components/AdminLogin";
import { adminLogin } from "../actions/adminLogin";
import { createClient } from "../utils/server";
import { redirect } from "next/navigation";

const Admin = async () => {
  const supabase = await createClient();
  const { data } = await supabase.auth.getSession();
  console.log({
    session: data.session,
  });

  if (data.session) {
    redirect("/admin/dashboard");
  }

  return (
    <>
      <AdminLogin login={adminLogin} />
    </>
  );
};

export default Admin;
