"use client";

import React from "react";
import { BlogPost } from "../(client)/blogs/schema";
import Image from "next/image";
import { useRouter } from "next/navigation";

interface Props {
  blogs: BlogPost[];
}

const BlogCard = ({ blogs }: Props) => {
  const router = useRouter();
  const handleOnClick = (slug: string) => router.push(`blogs/${slug}`);

  return (
    <>
      {blogs.map((blog) => (
        <div
          key={blog.slug}
          onClick={() => handleOnClick(blog.slug)}
          className={`flex flex-col mt-10 cursor-pointer gap-2`}
        >
          <div className="flex flex-col gap-4">
            <div className="flex flex-col">
              <h1 className="text-5xl  "> {blog.title} </h1>
              <div className="flex items-center gap-2 font-extralight ">
                <p>Nima Phuntsho</p>
                <p> {new Date(blog.date).toDateString()} </p>
              </div>
            </div>
            <div className="w-full h-[400px] relative ">
              <Image
                className="rounded-lg object-cover"
                src="/images/home-bg.jpg"
                fill
                alt="home"
              />
            </div>
          </div>
          <p className="text-lg">{blog.excerpt}</p>
          <button className=" self-start border p-2 rounded-sm cursor-pointer border-[#84AE92]">
            Read more
          </button>
        </div>
      ))}
    </>
  );
};

export default BlogCard;
