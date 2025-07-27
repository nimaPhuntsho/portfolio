import BlogCard from "@/app/components/BlogCard";
import { createClient } from "@/app/utils/server";

export default async function Blog() {
  const supabase = await createClient();
  const { data } = await supabase.from("blogs").select("*");

  if (!data) return;

  const blogs = data.map((blogData) => ({
    ...blogData,
    content: blogData.content.split("<br>"),
  }));

  return (
    <>
      <BlogCard blogs={blogs} />
    </>
  );
}
