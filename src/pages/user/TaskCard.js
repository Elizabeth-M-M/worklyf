import React, { useState } from "react";
import { ClockIcon } from "../../assets/icons";
import { useNavigate } from "react-router-dom";
import Modal from "../../components/Modal";
import ViewTask from "./pages/ViewTask";

export default function TaskCard({ task }) {
  const navigate = useNavigate();

  return (
    <div
      className=" bg-gray-light rounded-xl overflow-hidden cursor-pointer mb-2"
      onClick={() => {
        navigate(`/tasks/${task.id}`);
      }}
    >
      <div className="px-5 pt-4">
        <div className="flex align-center justify-between mb-3">
          <h4 className="font-bold tracking-wide text-sm">{task.title}</h4>
          <p
            className={`${
              task.label == "urgent"
                ? "bg-pink-light"
                : task.label == "moderate"
                ? "bg-orange"
                : "bg-green"
            } p-1 rounded-xl text-xs text-black `}
          >
            {task.label}
          </p>
        </div>
        <span className="bg-pink-light p-1 rounded-xl text-xs text-white  text-center">
          category
        </span>

        <div>
          <div className="flex align-center justify-start mt-3">
            <ClockIcon />
            <p className="text-xs tracking-wide ms-2 mb-2">
              Due in{" "}
              {Math.ceil(
                Math.abs(new Date() - new Date(task.start_date)) /
                  (1000 * 60 * 60 * 24)
              )}{" "}
              days: {task.start_date}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
