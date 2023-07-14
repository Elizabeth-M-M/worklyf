import React, { useState } from "react";
import { tasks } from "../../../assets/tasks";
import TaskCard from "../TaskCard";
import { FilterIcon, SearchIcon } from "../../../assets/icons";
import Button from "../../../components/Button";
import GuestNavbar from "../../guest/guestnavbar";
import Modal from "../../../components/Modal";
import CreateTask from "../CreateTask";
import { useDispatch, useSelector } from "react-redux";
import { openCreateTask } from "../../../features/modal/ModalSlice";

export default function Tasklist() {
  const dispatch = useDispatch()
  const { showCreateTask } = useSelector((store) => store.modal);

 
  return (
    <div className="px-6 py-3 relative">
      <div>
        <div className="flex items-center justify-between">
          <GuestNavbar />
          <div onClick={() => {
            dispatch(openCreateTask())
          }}>
            <Button text={"Create a task"} />
          </div>
        </div>
      </div>
      <div className="flex align-center justify-between mt-3">
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
      <div className="md:grid grid-cols-3 gap-4">
        {tasks.map((task) => (
          <TaskCard key={task.id} task={task} />
        ))}
      </div>
      {showCreateTask ? (
        <Modal>
          <CreateTask
            
          />
        </Modal>
      ) : null}
    </div>
  );
}
