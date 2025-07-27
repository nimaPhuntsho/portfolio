"use client";

import React from "react";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { BlogPost } from "../(client)/blogs/schema";

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
              <h1 className="md:text-4xl text-2xl"> {blog.title} </h1>
              <div className="flex items-center gap-2 font-extralight ">
                <p>Nima Phuntsho</p>
                <p> {new Date(blog.date).toDateString()} </p>
              </div>
            </div>
            <div className="w-full h-[400px] relative ">
              <Image
                className="rounded-lg object-cover"
                src={blog.cover_image!}
                fill
                alt="home"
              />
            </div>
          </div>
          <p className="text-lg text-justify ">{blog.excerpt}</p>
          <button className=" self-start border p-2 rounded-sm cursor-pointer border-[#84AE92] active:animate-pulse ">
            Read more
          </button>
        </div>
      ))}
    </>
  );
};

export default BlogCard;
