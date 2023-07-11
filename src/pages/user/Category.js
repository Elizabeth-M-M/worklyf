import React from 'react'

export default function Category() {
  return (
    <div className="mt-6">
      <h4 className="font-bold tracking-wide text-xl pb-3">Categories</h4>
      <div className="grid grid-cols-2 gap-4">
        <div className=" bg-gray-light rounded-xl h-56 overflow-hidden cursor-pointer ">
          <div className="px-5 pt-4">
            <h4 className="font-bold tracking-wide text-xl">Personal</h4>
            <p className="text-pink-dark tracking-wide text-sm my-2 mb-5">
              10 tasks
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
        <div className=" bg-gray-light rounded-xl h-56 overflow-hidden cursor-pointer ">
          <div className="px-5 pt-4">
            <h4 className="font-bold tracking-wide text-xl">Work</h4>
            <p className="text-pink-dark tracking-wide text-sm my-2 mb-5">
              13 tasks
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
