import React from "react";
import { useNavigate } from "react-router-dom";

export default function Button({
  text,
  clicked,
  type,
  textStyle,
  bgStyle,
  bgHoverStyle,
  textHoverStyle,
}) {
  const navigate = useNavigate();
  return (
    <button
      type={type == undefined ? "button" : type}
      className={` md:text-sm px-7 py-3 rounded-full mt-4 text-white md:text-lg
      ${
        bgStyle == undefined ? "bg-pink-dark" : bgStyle
      }
      ${textStyle == undefined ? "text-white" : textStyle}
      hover:${
        bgHoverStyle == undefined ? "bg-pink-light" : bgHoverStyle
      }
      hover:${
        textHoverStyle == undefined ? "text-black" : textHoverStyle
      }`}
      onClick={() => {
        if (clicked !== undefined) {
          navigate(clicked);
        }
      }}
    >
      {text}
    </button>
  );
}
