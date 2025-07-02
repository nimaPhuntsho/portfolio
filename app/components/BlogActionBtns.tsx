"use client";
import { AiOutlineLike } from "react-icons/ai";
import { VscComment } from "react-icons/vsc";
import { MdOutlineIosShare } from "react-icons/md";

import React, { useEffect, useState } from "react";

const BlogActionBtns = () => {
  const [commentState, setCommentState] = useState<{
    active: boolean;
    comment: string[];
  }>({
    active: false,
    comment: [],
  });

  useEffect(() => {
    console.log(commentState);
  }, [commentState]);

  const handleOnClick = (action: "like" | "comment" | "share" | "post") => {
    if (action === "like") {
      console.log(`liked`);
    }
    if (action === "comment") {
      setCommentState((prev) => ({ ...prev, active: true }));
    }
    if (action === "share") {
      console.log(`share`);
    }

    if (action === "post") {
      setCommentState((prev) => ({
        ...prev,
        active: false,
        comment: [...prev.comment],
      }));
      console.log(commentState);
    }
  };
  return (
    <>
      <div className={`flex gap-4 items-center`}>
        <AiOutlineLike
          className={`cursor-pointer`}
          onClick={() => handleOnClick("like")}
          size="20px"
        />
        <VscComment
          className={`cursor-pointer`}
          onClick={() => handleOnClick("comment")}
          size="20px"
        />
        <MdOutlineIosShare
          className={`cursor-pointer`}
          onClick={() => handleOnClick("share")}
          size="20px"
        />
      </div>
      {commentState.comment.length < 1 && <p> {commentState.comment} </p>}
      {commentState.active && (
        <div>
          <input
            type="text"
            onChange={(e) => {
              setCommentState((prev) => ({
                ...prev,
                comment: [e.target.value],
              }));
            }}
            className={`border-1`}
          />
          <button onClick={() => handleOnClick("post")}>Post</button>
        </div>
      )}
    </>
  );
};

export default BlogActionBtns;
