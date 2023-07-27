import React from "react";
import { useNavigate } from "react-router-dom";

export default function Category({ work, personal }) {
  const navigate = useNavigate();
  return (
    <div className="mt-6">
      <h4 className="font-bold tracking-wide text-xl pb-3">Categories</h4>
      <div className="grid grid-cols-2 gap-4">
        <div
          className=" bg-gray-light rounded-xl h-56 overflow-hidden cursor-pointer "
          onClick={() => {
            navigate("/tasks?type=Personal");
          }}
        >
          <div className="px-5 pt-4">
            <h4 className="font-bold tracking-wide text-xl">Personal</h4>
            <p className="text-pink-dark tracking-wide text-sm my-2 mb-5">
              {personal} tasks
            </p>
          </div>
          <div className="">
            <img
              src={"images/Designer life-rafiki.svg"}
              alt=""
              className="w-full h-full "
            />
          </div>
        </div>
        <div
          className=" bg-gray-light rounded-xl h-56 overflow-hidden cursor-pointer "
          onClick={() => {
            navigate("/tasks?type=Work");
          }}
        >
          <div className="px-5 pt-4">
            <h4 className="font-bold tracking-wide text-xl">Work</h4>
            <p className="text-pink-dark tracking-wide text-sm my-2 mb-5">
              {work} tasks
            </p>
          </div>
          <div className="">
            <img
              src={"images/Work life balance-pana.svg"}
              alt=""
              className="w-full h-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
