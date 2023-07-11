import React from 'react'
import { ChevronLeftIcon, ClockIcon, FilterIcon, PlayIcon, SearchIcon, UserIcon } from '../../../assets/icons';
import Status from '../Status';
import Category from '../Category';
import { tasks } from '../../../assets/tasks';

export default function UserLandingPage() {

  return (
    <div className="py-5 px-8 text-gray-lighter">
      <div className="flex align-center justify-between">
        <div>
          <h4 className="font-bold text-3xl tracking-wide">Hi Liz</h4>
          <p className="text-pink-dark tracking-wide text-sm my-2 mb-5">
            4 tasks pending
          </p>
        </div>
        <div>
          <UserIcon />
        </div>
      </div>
      <div className="flex align-center justify-between">
        <div className="bg-gray-light rounded-full flex ps-4 py-1 items-center w-3/4">
          <SearchIcon />
          <input
            type="text"
            className="bg-gray-light rounded-full p-2 px-4 outline-none w-3/4"
            placeholder="search"
          />
        </div>
        <div>
          <FilterIcon />
        </div>
      </div>
      <Status />
      <Category />
      <div className="mt-6">
        <div className="flex align-center justify-between">
          <h4 className="font-bold tracking-wide text-xl pb-3">
            Ongoing Tasks
          </h4>
          <p className="text-xs tracking-wide text-pink-light cursor-pointer">See all</p>
        </div>
        {tasks.slice(0, 2).map((task) => (
          <div className=" bg-gray-light rounded-xl overflow-hidden cursor-pointer mb-2">
            <div className="px-5 pt-4">
              <div className="flex align-center justify-between mb-3">
                <h4 className="font-bold tracking-wide text-sm">
                  Complete tasks
                </h4>
                <p className="bg-pink-light p-1 rounded-xl text-xs text-white ">
                  urgency
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
        ))}
      </div>
    </div>
  );
}
