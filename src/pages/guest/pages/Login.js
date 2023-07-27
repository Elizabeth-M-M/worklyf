import React, { useState } from "react";
import GuestNavbar from "../guestnavbar";
import { useNavigate } from "react-router-dom";
import Button from "../../../components/Button";
import { useDispatch, useSelector } from "react-redux";
import { checkUserInServer } from "../../../features/user/UserSlice";


export default function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { error } = useSelector((state) => state.user);
  const [loginFormData, setloginFormData] = useState({
    email: "",
    password: "",
  });

  const handleInputs = (event) => {
    setloginFormData({
      ...loginFormData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(checkUserInServer(loginFormData)).then((data) => {
      if (data.payload.errors === undefined) {
        setloginFormData({
          email: "",
          password: "",
        });
        navigate("/welcome");
      }
    });
  };

  return (
    <div className=" bg-white md:flex flex-row-reverse justify-between items-center h-screen text-gray-dark">
      <div className="md:w-5/12 ">
        <div className="ps-5  p-2">
          <GuestNavbar />
        </div>
        <div className="w-3/4 mx-auto">
          <div className="text-center p-5">
            <h3 className="text-3xl font-bold mb-2">Welcome Back</h3>
            <p className="text-sm text-gray-light tracking-wide">
              Separate with ease, find personal peace
            </p>
          </div>
          <form onSubmit={handleSubmit} className="p-8 ">
            <div className="mb-2">
              <label
                className="block text-sm tracking-wide mb-1"
                htmlFor="email"
              >
                Email Address
              </label>
              <input
                className="w-full bg-gray-light appearance-none rounded p-1 drop-shadow-lg text-white"
                type="email"
                id="email"
                name="email"
                value={loginFormData.email}
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
                className="w-full bg-gray-light appearance-none rounded p-1 drop-shadow-lg text-white"
                type="password"
                id="password"
                name="password"
                value={loginFormData.password}
                onChange={handleInputs}
                required
              />
            </div>
            <p
              className="text-end text-xs mt-2 cursor-pointer hover:text-pink-dark"
              onClick={() => {
                navigate("/register");
              }}
            >
              Don't have an account?
            </p>
            <div className="text-center ">
              <Button
                text={"Log In"}
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
      <div className=" hidden md:block w-7/12 h-screen bg-gray-light  items-center">
        <img
          src={"images/Designer life-rafiki.svg"}
          alt=""
          className="h-full"
        />
      </div>
    </div>
  );
}
