"use client";
import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { postBlog } from "../actions/postBlog";

const BlogForm = () => {
  const { register, handleSubmit } = useForm<{
    title: string;
    content: string;
  }>({
    defaultValues: {
      title: "",
      content: "",
    },
  });

  const formSubmitHandler: SubmitHandler<{
    title: string;
    content: string;
  }> = (data) => {
    postBlog({
      title: data.title,
      content: data.content,
    });

    console.log(data);
  };

  return (
    <div>
      <form
        onSubmit={handleSubmit(formSubmitHandler)}
        className="flex flex-col"
        action=""
      >
        <div className="flex flex-col">
          <label htmlFor="title">Title</label>
          <input
            {...register("title")}
            className="border p-2 rounded-lg"
            type="text"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="title">Content</label>
          <textarea
            {...register("content")}
            className="border rounded-lg p-2"
            cols={30}
            rows={10}
          ></textarea>
        </div>
        <button className="border p-2 rounded-lg" type="submit">
          Post
        </button>
      </form>
    </div>
  );
};

export default BlogForm;
