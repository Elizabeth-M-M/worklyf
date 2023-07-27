import React from 'react'

export default function Modal(props) {
  return (
    <div className="absolute top-0 left-0 bg-pink-light text-gray-dark min-h-screen w-full bg-opacity-40 mx-auto pt-2">
      {/* <div className=" flex items-center"></div> */}

      <div className=" bg-gray-dark w-5/6 md:w-1/2 p-5 rounded-lg mx-auto">{props.children}</div>
    </div>
  );
}
