import React, { useState } from "react";
import { ClockIcon } from "../../assets/icons";
import { useNavigate, useSearchParams } from "react-router-dom";
import Modal from "../../components/Modal";
import ViewTask from "./pages/ViewTask";

export default function TaskCard({ task }) {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  let type = searchParams.get("type");
  return (
    <div
      className=" bg-gray-light rounded-xl overflow-hidden cursor-pointer mb-2"
      onClick={() => {
        navigate(`/tasks/${task.id}?type=${type ? type : task.group_id==1?"Work":"Personal"}`);
      }}
    >
      <div className="px-5 pt-4">
        {task.category !== undefined ? (
          <span className="bg-pink-light p-1 rounded text-xs text-white  text-center mb-2 block">
            {task.category.name}
          </span>
        ) : null}
        <div className="flex align-center justify-between mb-3">
          <h4 className="font-bold tracking-wide text-sm">{task.title}</h4>
          <p
            className={`${
              task.label == "urgent"
                ? "bg-pink-light"
                : task.label == "moderate"
                ? "bg-orange"
                : "bg-green"
            } p-1 rounded text-xs text-black `}
          >
            {task.label}
          </p>
        </div>

        <div>
          <div className="flex align-center justify-start mt-3">
            <ClockIcon />
            <p className="text-xs tracking-wide ms-2 mb-2">
              Due in{" "}
              {Math.ceil(
                Math.abs(new Date() - new Date(task.start_date)) /
                  (1000 * 60 * 60 * 24)
              )}{" "}
              days
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
