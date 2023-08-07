import React from "react";

export default function Modal(props) {
  return (
    <div className="absolute top-0 left-0 bg-pink-light text-gray-dark min-h-screen w-full bg-opacity-40 mx-auto pt-2">
      <div className=" w-5/6 md:w-5/6 p-5 rounded-lg mx-auto">
        {props.children}
      </div>
    </div>
  );
}
