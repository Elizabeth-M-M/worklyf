import React from "react";
import Button from "../../../components/Button";
import GuestNavbar from "../guestnavbar";

export default function GuestMain() {
  return (
    <>
      <div className="py-3 px-5 md:mx-32">
        <GuestNavbar />
      </div>

      <div className="p-5 ">
        <div className="md:flex justify-between items-center">
          <h3 className="text-3xl  text-white tracking-wide leading-relaxed  md:w-1/3 md:mx-32 md:text-5xl md:leading-tight text-center md:text-start">
            Master the art of work-life task separation with{" "}
            <span className="text-pink-dark underline text-3xl font-bold md:text-5xl">
              WorkLyf
            </span>
          </h3>
          <div className="md:w-2/3">
            <div className="flex my-5 ">
              <div className="w-1/3 md:w-1/3">
                <img
                  src={"images/Designer life-rafiki.svg"}
                  alt="boy juggling life"
                />
              </div>
              <div className="w-2/4">
                <img
                  src={"images/Work life balance-pana.svg"}
                  alt="girl juggling life"
                />
              </div>
            </div>

            <p className="text-xs md:text-sm text-center md:w-2/3">
              Find your balance, draw the line. Unleash the power of separate
              realms!.
            </p>
          </div>
        </div>
        <div className="text-center mt-6 md:mt-3">
          <Button text={"Let's Start"} clicked={"/register"} />
        </div>
      </div>
    </>
  );
}
