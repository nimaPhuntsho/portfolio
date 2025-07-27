"use client";
import React, { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { postBlog } from "../actions/postBlog";

const BlogForm = () => {
  const [file, setFile] = useState<string | null>(null);
  const { register, handleSubmit, setValue } = useForm<{
    title: string;
    content: string;
    image: FileList | undefined;
  }>({
    defaultValues: {
      title: "",
      content: "",
      image: undefined,
    },
  });

  const formSubmitHandler: SubmitHandler<{
    title: string;
    content: string;
    image: FileList | undefined;
  }> = (data) => {
    if (!data.image) return;
    const formData = new FormData();
    formData.append("title", data.title);
    formData.append("content", data.content);
    formData.append("image", data.image[0]);
    const file = formData.get("image") as File | null;
    if (!file) return;
    postBlog(formData);
    if (!data.image) return;
    setFile(data.image[0].name);
  };

  const handleRemove = () => {
    setFile(null);
    setValue("image", undefined);
  };
  return (
    <div>
      <form
        onSubmit={handleSubmit(formSubmitHandler)}
        className="flex flex-col gap-4"
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
        <div>
          <label className="cursor-pointer border p-1" htmlFor="fileInput">
            Select Image
          </label>
          <input
            id="fileInput"
            {...register("image", {
              onChange: (e: React.ChangeEvent<HTMLInputElement>) => {
                if (!e.target.files) return;
                const file = e.target.files[0];
                setFile(file.name);
              },
            })}
            className="hidden"
            type="file"
          />
        </div>
        {file && (
          <div className="flex gap-4">
            <p> {file} </p>
            <button onClick={handleRemove}>Remove</button>
          </div>
        )}

        <button className="border p-2 rounded-lg" type="submit">
          Post
        </button>
      </form>
    </div>
  );
};

export default BlogForm;
