import React from 'react'
import { ClockIcon } from '../../assets/icons';

export default function TaskCard({task}) {
  return (
    <div className=" bg-gray-light rounded-xl overflow-hidden cursor-pointer mb-2">
      <div className="px-5 pt-4">
        <div className="flex align-center justify-between mb-3">
          <h4 className="font-bold tracking-wide text-sm">{task.title}</h4>
          <p
            className={`${
              task.label == "urgent" ? "bg-pink-light" : task.label == "moderate"?"bg-orange":"bg-green"} p-1 rounded-xl text-xs text-black `}
          >
            {task.label}
          </p>
        </div>
        <span className="bg-pink-light p-1 rounded-xl text-xs text-white  text-center">
          category
        </span>

        <div>
          <div className="flex align-center justify-start mt-3">
            <ClockIcon />
            <p className="text-xs tracking-wide ms-2 mb-2">
              Due in 3 days: 12/03/2023
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
