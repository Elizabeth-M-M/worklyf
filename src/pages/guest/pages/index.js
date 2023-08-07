import React from "react";
import Button from "../../../components/Button";
import GuestNavbar from "../guestnavbar";
import { BokeDots } from "../../../assets/iconsandsvgs";

export default function GuestMain() {
  return (
    <div className="relative">
      <div className="py-3 px-5 lg:mx-32  ">
        <GuestNavbar />
      </div>
      <div className=" lg:h-[32rem] h-full flex items-center">
        <div className="lg:ms-32 ms-0 p-5 grid  lg:grid-cols-2 xl:grid-cols-3">
          <div className="flex items-center my-8 md:my-0 mb-16 md:mb-0">
            <div className="text-center lg:text-start ">
              <p className="tracking-wide uppercase mb-3 text-sm text-pink-dark ">
                Manage your tasks
              </p>
              <h3 className="text-3xl  text-white  md:leading-relaxed    md:text-4xl lg:text-5xl  leading-tight xl:leading-relaxed">
                Work-Life Task Separation
              </h3>
              <p className="tracking-wide my-8 text-sm md:w-2/3 md:mx-auto lg:mx-0">
                Empowering you to conquer deadlines at work and savor your
                personal moments without any messy overlap.
              </p>
              <div className="mt-6 md:mt-3">
                <Button text={"Let's Start"} clicked={"/register"} />
              </div>
            </div>
          </div>

          <div className="z-10  lg:col-span-1 col-span-1 relative xl:col-span-2">
            <div className="flex my-5 ">
              <div className="w-1/3 md:w-1/3">
                <img src={"images/task-2.png"} alt="boy juggling life" />
              </div>
              <div className="w-3/4">
                <img src={"images/task-1.png"} alt="girl juggling life" />
              </div>
            </div>
            {/* <p className="text-xs md:text-sm text-center md:w-2/3">
              Find your balance, draw the line. Unleash the power of separate
              realms!.
            </p> */}
            <div className="w-full h-full absolute  top-0 right-0 z-0 opacity-40 rounded-b-full overflow-hidden lg:-ms-40">
              <BokeDots />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
