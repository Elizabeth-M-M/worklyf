import React from 'react'
import { ChevronLeftIcon, PlayIcon, SearchIcon } from '../../../assets/icons';

export default function UserLandingPage() {
  return (
    <div className="p-5">
      <div>
        <h4>Hi, Liz</h4>
        <p>10 tasks pending</p>
      </div>
      
      <div className="bg-gray-light rounded-full">
        <SearchIcon/>
        <input
          type="text"
          className="bg-gray-light rounded-full p-2 px-4"
          placeholder="search"
        />
      </div>
    </div>
  );
}
