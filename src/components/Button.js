import React from "react";
import { useNavigate } from "react-router-dom";

export default function Button({ text, click }) {
  const navigate = useNavigate();
  return (
    <button
      className="font-bold tracking-wide text-sm bg-pink-light py-2 px-7 rounded-full mt-4 text-white md:text-lg hover:bg-white hover:text-pink-dark "
      onClick={() => {
        console.log("clicked")
        navigate('/register');
      }}
    >
      {text}
    </button>
  );
}
