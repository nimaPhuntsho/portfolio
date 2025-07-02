import { createClient } from "@/app/utils/server";
import BlogCard from "../../components/BlogCard";

export default async function Blog() {
  const supabase = await createClient();
  const { data } = await supabase.from("blogs").select("*");

  if (!data) return;

  const blogs = data.map((blogData) => ({
    ...blogData,
    content: blogData.content.split("<br>"),
  }));

  console.log(blogs);

  return (
    <>
      <BlogCard blogs={blogs} />
    </>
  );
}
