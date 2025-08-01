"use client";
import React, { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { BsSend } from "react-icons/bs";
import z from "zod";
import { ContactSchema } from "../(client)/contact/schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { createClient } from "../lib/supabaseClient";

const ContactForm = () => {
  const [contactState, setContactState] = useState<{
    loading: boolean;
    error: string | null;
    success: boolean;
  }>({
    loading: false,
    error: null,
    success: false,
  });
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<z.infer<typeof ContactSchema>>({
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
    resolver: zodResolver(ContactSchema),
  });

  const onSubmit: SubmitHandler<z.infer<typeof ContactSchema>> = async (
    data
  ) => {
    try {
      setContactState((state) => ({
        ...state,
        loading: true,
        error: null,
        success: false,
      }));
      const { name, email, message } = data;
      const supabase = await createClient();
      const { error } = await supabase
        .from("messages")
        .insert({
          name: name,
          email: email,
          message: message,
          // id: "28c69de2-3fed-46ae-928a-13703ac71254",
        })
        .select();
      if (error) throw error;
      reset();
      setContactState((state) => ({ ...state, success: true }));
    } catch (error) {
      console.log(error);
      setContactState((state) => ({
        ...state,
        error: "Sorry, something went wrong, please try again!",
      }));
    } finally {
      setContactState((state) => ({ ...state, loading: false }));
    }
  };
  return (
    <>
      <div className={`flex-1 flex flex-col justify-center items-center`}>
        <div className={`flex flex-col gap-4 w-full max-w-[500px] `}>
          <h1 className={`md:text-4xl text-2xl`}>Contact</h1>
          <form
            className={`flex flex-col gap-6`}
            onSubmit={handleSubmit(onSubmit)}
          >
            <div className={`flex flex-col gap-2`}>
              <label htmlFor="">Name</label>
              <input
                className={`border border-[#6D5D6E] p-3 rounded-md `}
                type="text"
                {...register("name")}
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
                {...register("email")}
              />
              {errors.email && (
                <p className={`text-red-300`}>{errors.email.message} </p>
              )}
            </div>
            <div className={`flex flex-col gap-2`}>
              <label htmlFor="">Message</label>
              <textarea
                className={`border border-[#6D5D6E] p-3 rounded-md `}
                {...register("message")}
              ></textarea>
              {errors.message && (
                <p className={`text-red-300`}> {errors.message.message} </p>
              )}
              {contactState.error && (
                <p className={`text-red-300`}> {contactState.error} </p>
              )}
            </div>
            <button
              type="submit"
              className={` flex items-center justify-center gap-2  bg-[#697565] p-3  rounded-md font-bold  transition-transform duration-150 active:scale-95 active:animate-pulse cursor-pointer`}
            >
              {contactState.loading ? "Please wait..." : "Send"}
              <BsSend />
            </button>
            {contactState.success && (
              <p>
                Thank you for reaching out to me, I will get back to you
                shortly!
              </p>
            )}
          </form>
        </div>
      </div>
    </>
  );
};

export default ContactForm;
