import React from 'react'

export default function Status() {
  return (
    <div className="mt-6">
      <h4 className="font-bold tracking-wide text-xl pb-3">Status</h4>
      <div className="grid grid-cols-2 gap-4">
        <div className=" bg-gray-light rounded-xl overflow-hidden cursor-pointer ">
          <div className="px-5 pt-4">
            <h4 className="font-bold tracking-wide text-sm">Complete tasks</h4>
            <p className="text-pink-dark tracking-wide text-sm my-2 mb-5">
              112
            </p>
          </div>
        </div>
        <div className=" bg-gray-light rounded-xl overflow-hidden cursor-pointer ">
          <div className="px-5 pt-4">
            <h4 className="font-bold tracking-wide text-sm">Pending tasks</h4>
            <p className="text-pink-dark tracking-wide text-sm my-2 mb-5">4</p>
          </div>
        </div>
      </div>
    </div>
  );
}
