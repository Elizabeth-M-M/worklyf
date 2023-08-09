import React, { useEffect } from "react";
import TaskCard from "../TaskCard";
import { HomeIcon } from "../../../assets/iconsandsvgs";
import Button from "../../../components/Button";
import GuestNavbar from "../../guest/guestnavbar";
import Modal from "../../../components/Modal";
import CreateTask from "../CreateTask";
import { useDispatch, useSelector } from "react-redux";
import { openCreateTask } from "../../../features/modal/ModalSlice";
import { Link, useSearchParams } from "react-router-dom";
import LoadingSpinner from "../../../components/LoadingSpinner";

export default function Tasklist() {
  const [searchParams, setSearchParams] = useSearchParams();
  let type = searchParams.get("type");
  const dispatch = useDispatch();
  const { showCreateTask } = useSelector((store) => store.modal);
  const { tasks, loading } = useSelector((store) => ({ ...store.task }));

  let renderTasks;
  if (loading) {
    renderTasks = <LoadingSpinner />;
  } else if (tasks.length == 0) {
    renderTasks = (
      <h2 className="text-center pt-6">
        You currently have no tasks. Click on 'Create a task' button to add a
        new task
      </h2>
    );
  } else {
    const typeTasks = tasks.filter((task) => task.group.name === type);
    if (typeTasks.length == 0) {
      renderTasks = (
        <h2 className="text-center pt-6">
          You currently have no {type} tasks. Click on 'Create a task' button to
          add a new {type} task
        </h2>
      );
    } else {
      const completedTasks = typeTasks.filter((task) => task.status == true);
      const pendingTasks = typeTasks.filter(
        (task) => task.status == false || task.status == null
      );
      renderTasks = (
        <div>
          {pendingTasks.length == 0 ? (
            <h2 className="text-center pt-6">
              You currently have no pending tasks.
            </h2>
          ) : (
            <div>
              <h2 className="text-white uppercase text-center my-2 text-xl bg-gray-light bg-opacity-40">
                Pending Tasks
              </h2>
              <div className="md:grid grid-cols-3 gap-4">
                {pendingTasks.map((task) => {
                  return <TaskCard key={task.id} task={task} />;
                })}
              </div>
            </div>
          )}
          {completedTasks.length == 0 ? (
            <h2 className="text-center pt-6">
              You currently have no completed tasks.
            </h2>
          ) : (
            <div>
              <h2 className="text-white uppercase text-center my-2 text-xl bg-gray-light bg-opacity-40">
                Completed Tasks
              </h2>
              <div className="md:grid grid-cols-3 gap-4">
                {completedTasks.map((task) => {
                  return <TaskCard key={task.id} task={task} />;
                })}
              </div>
            </div>
          )}
        </div>
      );
    }
  }
  
  return (
    <div className="px-6 py-3 relative min-h-screen">
      <div>
        <div className="flex items-center justify-between">
          <GuestNavbar />
          <div className="flex items-center">
            <div
              onClick={() => {
                dispatch(openCreateTask());
              }}
            >
              <Button text={"Create a task"} />
            </div>
            <Link to="/welcome" className="ms-4 text-sm ">
              <HomeIcon />
              <p>HOME</p>
            </Link>
          </div>
        </div>
      </div>
      <div className="flex align-center justify-between mt-3">
        <h4 className="font-bold tracking-wide text-xl pb-3">
          All {type} Tasks
        </h4>
      </div>
      {/* <div className="flex align-center justify-between mb-6">
        <div className="bg-gray-light rounded-full flex ps-4 py-1 items-center w-3/4 ">
          <SearchIcon />
          <input
            type="text"
            className="bg-gray-light  outline-none w-3/4"
            placeholder="search"
          />
        </div>
        <div className="cursor-pointer">
          <FilterIcon />
        </div>
      </div> */}
      <div>{renderTasks}</div>
      {showCreateTask ? (
        <Modal>
          <CreateTask />
        </Modal>
      ) : null}
    </div>
  );
}
