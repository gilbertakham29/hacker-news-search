"use client";
import React from "react";

export default function PostDetail({ post }) {
  return (
    <div className=" mt-12 flex flex-col items-center justify-between">
      <h2 className="text-3xl font-bold text-black">{post.title}</h2>
      <p className="text-lg font-semibold ">Points: {post.points}</p>
      <ul className="">
        {post.children.map((comment) => (
          <li
            className=" mx-auto mt-3 w-2/3 text-xl font-light"
            key={comment.id}
          >
            {comment.text}
          </li>
        ))}
      </ul>
    </div>
  );
}
