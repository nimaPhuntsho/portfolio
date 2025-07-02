import Image from "next/image";
import { redirect } from "next/navigation";
import { createClient } from "@/app/utils/server";

interface Props {
  params: Promise<{
    slug: string[];
  }>;
}

export default async function BlogId({ params }: Props) {
  const { slug } = await params;
  if (slug.length >= 2) {
    redirect("/blogs");
  }

  const supabase = await createClient();
  const { data, error } = await supabase
    .from("blogs")
    .select("*")
    .eq("slug", slug[0]);

  if (!data || error) return <p>Error fetching the data</p>;

  const blogs = data.map((blogData) => ({
    ...blogData,
    content: blogData.content.split("\n"),
  }));

  return blogs.map((blog) => (
    <div
      key={blog.id}
      className={`flex flex-col ustify-center items-start mt-10`}
    >
      <div className="flex flex-col gap-4">
        <div className="flex flex-col ">
          <h1 className="text-5xl  ">{blog.title}</h1>
          <div className="flex items-center gap-2 font-extralight ">
            <p> {blog.author} </p>
            <p> {new Date(blog.date).toDateString()} </p>
          </div>
        </div>
        <div className="w-full h-[400px] relative">
          <Image
            className="rounded-lg"
            src="/images/home-bg.jpg"
            fill
            alt="home"
          />
        </div>
        {blog.content.map((data, index) => (
          <p key={index}> {data} </p>
        ))}
      </div>
    </div>
  ));
}
