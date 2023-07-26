import React from 'react'
import { useNavigate } from 'react-router-dom';

export default function Status({pending, completed}) {

  const navigate = useNavigate()
  return (
    <div className="mt-6">
      <h4 className="font-bold tracking-wide text-xl pb-3">Status</h4>
      <div className="grid grid-cols-2 gap-4">
        <div
          className=" bg-gray-light rounded-xl overflow-hidden "

        >
          <div className="px-5 pt-4">
            <h4 className="font-bold tracking-wide text-sm">Complete tasks</h4>
            <p className="text-pink-dark tracking-wide text-sm my-2 mb-5">
              {completed}
            </p>
          </div>
        </div>
        <div
          className=" bg-gray-light rounded-xl overflow-hidden "
        
        >
          <div className="px-5 pt-4">
            <h4 className="font-bold tracking-wide text-sm">Pending tasks</h4>
            <p className="text-pink-dark tracking-wide text-sm my-2 mb-5">
              {pending}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
