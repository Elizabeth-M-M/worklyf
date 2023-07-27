import React, { useState } from "react";
import GuestNavbar from "../guestnavbar";
import { useNavigate } from "react-router-dom";
import Button from "../../../components/Button";
import { useDispatch, useSelector } from "react-redux";
import { createUserInServer } from "../../../features/user/UserSlice";

export default function Register() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
    const { user, error } = useSelector((state) => state.user);
  const [signUpFormData, setSignUpFormData] = useState({
    full_name: "",
    email: "",
    password: "",
    password_confirmation: "",
  });

  const handleInputs = (event) => {
    setSignUpFormData({
      ...signUpFormData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(createUserInServer(signUpFormData)).then((data) => {
      if (data.payload.errors === undefined) {
        navigate("/login");
        setSignUpFormData({
          full_name: "",
          email: "",
          password: "",
          password_confirmation: "",
        });
      }
    });
  };

  return (
    <div className=" bg-white md:flex justify-between items-center h-screen text-gray-dark">
      <div className="md:w-5/12 ">
        <div className="ps-5  p-2">
          <GuestNavbar />
        </div>
        <div className="w-3/4 mx-auto">
          <div className="text-center p-5">
            <h3 className="text-3xl font-bold mb-2">Welcome</h3>
            <p className="text-sm text-gray-light tracking-wide">
              Separate with ease, find personal peace
            </p>
          </div>
          <form onSubmit={handleSubmit} className="p-7 pb-1">
            <div className="mb-2">
              <label
                className="block text-sm tracking-wide mb-1"
                htmlFor="full_name"
              >
                Full Name
              </label>
              <input
                className="w-full bg-pink-light appearance-none rounded p-1 drop-shadow-lg text-white"
                type="text"
                id="full_name"
                name="full_name"
                value={signUpFormData.full_name}
                onChange={handleInputs}
                required
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
                className="w-full bg-pink-light appearance-none rounded p-1 drop-shadow-lg text-white"
                type="email"
                id="email"
                name="email"
                value={signUpFormData.email}
                onChange={handleInputs}
                required
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
                className="w-full bg-pink-light appearance-none rounded p-1 drop-shadow-lg text-white"
                type="password"
                id="password"
                name="password"
                value={signUpFormData.password}
                onChange={handleInputs}
                required
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
                className="w-full bg-pink-light appearance-none rounded p-1 drop-shadow-lg text-white"
                value={signUpFormData.password_confirmation}
                onChange={handleInputs}
                required
              />
            </div>
            <p
              className="text-end text-xs mt-2 cursor-pointer hover:text-pink-dark"
              onClick={() => {
                navigate("/login");
              }}
            >
              Already have an account?
            </p>
            <div className="text-center ">
              <Button
                text={"Sign Up"}
                type={"submit"}
                textStyle={"text-white"}
                bgStyle={"bg-gray-dark"}
                textHoverStyle={"text-white"}
                bgHoverStyle={"bg-gray-light"}
              />
            </div>
          </form>
          {error && error !== undefined
            ? error.map((err) => (
                <p key={err} className="text-xs text-black mt-1 text-center">
                  {err}
                </p>
              ))
            : null}
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
