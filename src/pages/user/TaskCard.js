import React from "react";
import { ClockIcon, OpenIcon } from "../../assets/iconsandsvgs";
import { useNavigate, useSearchParams } from "react-router-dom";
import { toggleBtnStyle } from "../../assets/extramethods";
import { useDispatch } from "react-redux";
import { deleteTask, editTask } from "../../features/tasks/TaskSlice";

export default function TaskCard({ task }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [searchParams, setSearchParams] = useSearchParams();
  let type = searchParams.get("type");

  return (
    <div className="relative bg-gray-light rounded-xl overflow-hidden  mb-2">
      <div className="px-5 pt-4">
        <div className="flex align-center justify-between mb-3">
          <h4 className="font-bold tracking-wide text-sm">{task.title}</h4>
          <div className="flex">
            <p
              className={`${
                task.label == "urgent"
                  ? "bg-pink-light"
                  : task.label == "moderate"
                  ? "bg-orange"
                  : "bg-green"
              } p-1 rounded me-3 text-xs text-black `}
            >
              {task.label}
            </p>
            <div
              onClick={() => {
                navigate(
                  `/tasks/${task.id}?type=${
                    type ? type : task.group_id == 2 ? "Work" : "Personal"
                  }`
                );
              }}
              className="cursor-pointer hover:text-pink-dark "
            >
              <OpenIcon />
            </div>
          </div>
        </div>
        {task.category !== undefined ? (
          <span className=" rounded text-xs text-pink-dark mb-2 block">
            {task.category.name}
          </span>
        ) : null}
        <div className="">
          <label className="relative inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              id="status"
              name="status"
              className="sr-only peer"
              checked={task.status}
              onChange={(event) => {
                dispatch(
                  editTask({
                    id: task.id,
                    task: { ...task, status: event.target.checked },
                  })
                );
              }}
            />
            <div className={toggleBtnStyle}></div>
            <span className="ml-3 text-sm font-medium ">
              {task.status ? "Done" : "Mark as done"}
            </span>
          </label>
          <div className="flex items-center justify-between">
            <div className="flex align-center justify-start mt-3">
              <ClockIcon />
              {new Date() - new Date(task.start_date) < 0 ? (
                <p className="text-xs tracking-wide ms-2 mb-2">
                  Due in{" "}
                  {Math.ceil(
                    Math.abs(new Date() - new Date(task.start_date)) /
                      (1000 * 60 * 60 * 24)
                  )}{" "}
                  days
                </p>
              ) : (
                <p className="text-xs tracking-wide ms-2 mb-2">Expired</p>
              )}
            </div>
            <div onClick={() => dispatch(deleteTask({ id: task.id }))}>
              <button className="text-xs bg-pink-dark rounded py-1 px-3 hover:bg-white text-black">
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>
      {new Date() - new Date(task.start_date) < 0 ? null : (
        <div className="shadow-[inset_0_-4px_4px_rgba(0,0,0,0.6)] absolute top-10 left-0 bg-pink-dark w-full rotate-90 text-center text-bold text-black text-bold">
          EXPIRED
        </div>
      )}
    </div>
  );
}
