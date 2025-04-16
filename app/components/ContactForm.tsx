"use client";
import React, { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { BsSend } from "react-icons/bs";

interface FormData {
  name: string;
  email: string;
  message: string;
}

const ContactForm = () => {
  const [clicked, setClicked] = useState(false);
  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm<FormData>({
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  const onSubmit: SubmitHandler<FormData> = (data) => {
    setClicked(true);
    console.log(data);
  };
  return (
    <>
      <div
        className={`flex flex-col justify-center items-center min-h-[100dvh]`}
      >
        <div className={`flex flex-col gap-4 w-full max-w-[500px] `}>
          <h1 className={`text-4xl font-bold`}>CONTACT</h1>
          <form
            className={`flex flex-col gap-6`}
            onSubmit={handleSubmit(onSubmit)}
          >
            <div className={`flex flex-col gap-2`}>
              <label htmlFor="">Name</label>
              <input
                className={`border border-[#6D5D6E] p-3 rounded-md `}
                type="text"
                {...register("name", {
                  required: "Name is required",
                  minLength: 1,
                })}
              />
              {errors.name && (
                <p className={`text-red-300`}>{errors.name.message} </p>
              )}
            </div>
            <div className={`flex flex-col gap-2`}>
              <label htmlFor="">Email</label>
              <input
                className={`border border-[#6D5D6E] p-3 rounded-md `}
                type="email"
                {...register("email", { required: "Email is required" })}
              />
              {errors.email && (
                <p className={`text-red-300`}>{errors.email.message} </p>
              )}
            </div>
            <div className={`flex flex-col gap-2`}>
              <label htmlFor="">Message</label>
              <textarea
                className={`border border-[#6D5D6E] p-3 rounded-md `}
                {...register("message", {
                  required: "Message should have atleast 30 characters",
                  minLength: 20,
                })}
              ></textarea>
              {errors.message && (
                <p className={`text-red-300`}> {errors.message.message} </p>
              )}
            </div>
            <button
              type="submit"
              className={` flex items-center justify-center gap-2  bg-[#697565] p-3  rounded-md font-bold  ${
                clicked &&
                `transition-transform duration-150 active:scale-95 active:animate-pulse`
              } cursor-pointer`}
            >
              <p> Send</p>
              <BsSend />
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default ContactForm;
