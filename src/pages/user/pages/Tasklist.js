import React from 'react'
import { tasks } from "../../../assets/tasks";
import TaskCard from '../TaskCard';
import { FilterIcon, SearchIcon } from '../../../assets/icons';

export default function Tasklist() {
  return (
    <div className="p-6">
      <div className="flex align-center justify-between">
        <h4 className="font-bold tracking-wide text-xl pb-3">All Tasks</h4>
        {/* <p className="text-xs tracking-wide text-pink-light cursor-pointer hover:text-white">
          View on calender
        </p> */}
      </div>
      <div className="flex align-center justify-between mb-6">
        <div className="bg-gray-light rounded-full flex ps-4 py-1 items-center w-3/4 ">
          <SearchIcon />
          <input
            type="text"
            className="bg-gray-light  outline-none w-3/4"
            placeholder="search"
          />
        </div>
        <div>
          <FilterIcon />
        </div>
      </div>
      <div className='md:grid grid-cols-3 gap-4'>
        {tasks.map((task) => (
          <TaskCard task={task} />
        ))}
      </div>
    </div>
  );
}
