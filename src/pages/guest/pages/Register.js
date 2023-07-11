import React, { useState } from "react";
import GuestNavbar from "../Guestnavbar";
import { useNavigate } from "react-router-dom";

export default function Register() {
const navigate= useNavigate()

  return (
    <div className=" bg-white md:flex justify-between items-center h-screen text-black">
      <div className="md:w-4/12 ">
        <div className="ps-5  p-2">
          <GuestNavbar />
        </div>

        <div>
          <div className="text-center p-5">
            <h3 className="text-3xl font-bold mb-2">Welcome</h3>
            <p className="text-sm text-gray-light tracking-wide">
              Separate with ease, find personal peace
            </p>
          </div>
          <form action="" className="p-8">
            <div className="mb-2">
              <label
                className="block text-sm tracking-wide mb-1"
                htmlFor="first_name"
              >
                First Name
              </label>
              <input
                className="w-full bg-pink-light appearance-none rounded p-1 drop-shadow-lg"
                type="text"
                id="first_name"
                name="first_name"
              />
            </div>
            <div className="mb-2">
              <label
                className="block text-sm tracking-wide mb-1"
                htmlFor="email"
              >
                Email Address
              </label>
              <input
                className="w-full bg-pink-light appearance-none rounded p-1 drop-shadow-lg"
                type="email"
                id="email"
                name="email"
              />
            </div>
            <div className="mb-2">
              <label
                className="block text-sm tracking-wide mb-1"
                htmlFor="password"
              >
                Password
              </label>
              <input
                className="w-full bg-pink-light appearance-none rounded p-1 drop-shadow-lg"
                type="password"
                id="password"
                name="password"
              />
            </div>
            <div className="mb-2">
              <label
                className="block text-sm tracking-wide mb-1"
                htmlFor="password_confirmation"
              >
                Confirm Password
              </label>
              <input
                type="password"
                id="password_confirmation"
                name="password_confirmation"
                className="w-full bg-pink-light appearance-none rounded p-1 drop-shadow-lg"
              />
            </div>
            <p className="text-end text-xs mt-2 cursor-pointer hover:text-pink-dark">Already have an account?</p>
            <div className="text-center ">
              <input
                type="button"
                value="Sign Up"
                className=" bg-gray-dark py-1 px-3 rounded-xl  text-white hover:bg-gray-light mt-9"
              />
            </div>
          </form>
        </div>
      </div>
      <div className=" hidden md:block w-7/12 h-screen bg-gray-light">
        <img
          src={"images/Work life balance-pana.svg"}
          alt=""
          className="h-full"
        />
      </div>
    </div>
  );
}
