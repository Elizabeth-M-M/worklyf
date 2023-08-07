import React, { useEffect } from "react";
import TaskCard from "../TaskCard";
import { FilterIcon, HomeIcon, SearchIcon } from "../../../assets/icons";
import Button from "../../../components/Button";
import GuestNavbar from "../../guest/guestnavbar";
import Modal from "../../../components/Modal";
import CreateTask from "../CreateTask";
import { useDispatch, useSelector } from "react-redux";
import { openCreateTask } from "../../../features/modal/ModalSlice";
import { Link, useSearchParams } from "react-router-dom";

export default function Tasklist() {
  const [searchParams, setSearchParams] = useSearchParams();
  let type = searchParams.get("type");
  const dispatch = useDispatch();
  const { showCreateTask } = useSelector((store) => store.modal);
  const { tasks, loading } = useSelector((store) => store.task);
  useEffect(()=>{

  },[tasks])

  let renderTasks;
  if (!loading && tasks.length === 0) {
    renderTasks = (
      <h2 className="text-center pt-6">
        You currently have no tasks. Click on 'Create a task' button to add a
        new task
      </h2>
    );
  } else if (loading) {
    renderTasks = <h2>Tasks loading....</h2>;
  } else if (!loading && tasks[0] !== undefined) {
    if(tasks[0].length==0){
       renderTasks = <h2 className="text-center pt-6">You currently have no tasks. Click on 'Create a task' button to add a new task</h2>;
    }else{
      renderTasks = (
        <div className="">
          <div>
            <h2 className="text-white uppercase text-center my-2 text-xl bg-gray-light bg-opacity-40">
              Pending Tasks
            </h2>
            <div className="md:grid grid-cols-3 gap-4">
              {tasks[0]
                .filter(
                  (task) =>
                    task.group.name === type &&
                    (task.status == false || task.status == null)
                )
                .map((task) => {
                  return <TaskCard key={task.id} task={task} />;
                })}
            </div>
          </div>
          <div>
            <h2 className="text-white uppercase text-center my-2 text-xl bg-gray-light bg-opacity-40">
              Completed Tasks
            </h2>
            <div className="md:grid grid-cols-3 gap-4">
              {tasks[0]
                .filter(
                  (task) => task.group.name === type && task.status == true
                )
                .map((task) => {
                  return <TaskCard key={task.id} task={task} />;
                })}
            </div>
          </div>
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
      <div className="flex align-center justify-between mb-6">
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
      </div>
      <div>
        {renderTasks}
      </div>
      {showCreateTask ? (
        <Modal>
          <CreateTask />
        </Modal>
      ) : null}
    </div>
  );
}
