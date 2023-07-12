import React from 'react'
import {FilterIcon, SearchIcon, UserIcon } from '../../../assets/icons';
import Status from '../Status';
import Category from '../Category';
import { tasks } from '../../../assets/tasks';
import TaskCard from '../TaskCard';

export default function UserLandingPage() {

  return (
    <div className="py-5 px-8 text-gray-lighter">
      <div className="flex align-center justify-between">
        <div>
          <h4 className="font-bold text-3xl tracking-wide">Hi Liz</h4>
          <p className="text-pink-dark tracking-wide text-sm my-2 mb-5 md:mb-0">
            4 tasks pending
          </p>
        </div>
        <div>
          <UserIcon />
        </div>
      </div>
      <div className="md:grid grid-cols-2 gap-8">
        <div>
          <Status />
          <Category />
        </div>

        <div className="mt-6 md:mt-0">
          <div className="flex align-center justify-between my-5 md:mb-12">
            <div className="bg-gray-light rounded-full flex ps-4 py-1 items-center w-3/4">
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
          <div className="flex align-center justify-between">
            <h4 className="font-bold tracking-wide text-xl pb-3">
              Ongoing Tasks
            </h4>
            <p className="text-xs tracking-wide text-pink-light cursor-pointer">
              See all
            </p>
          </div>

          {tasks.slice(0, 3).map((task) => (
            <TaskCard task={task} />
          ))}
        </div>
      </div>
    </div>
  );
}
