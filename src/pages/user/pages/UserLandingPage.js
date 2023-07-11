import React from 'react'
import { ChevronLeftIcon, FilterIcon, PlayIcon, SearchIcon, UserIcon } from '../../../assets/icons';
import Status from '../Status';
import Category from '../Category';

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
      <Status/>
      <Category/>
      
    </div>
  );
}
