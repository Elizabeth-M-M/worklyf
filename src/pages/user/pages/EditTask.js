import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Button from "../../../components/Button";
import { categories } from "../../../assets/tasks";
import { BellIcon, ClockIcon, LinkIcon } from "../../../assets/icons";
import { allTasks } from "../../../assets/tasks";
import ToggleButton from "../../../components/ToggleButton";
import { useDispatch, useSelector } from "react-redux";
import { editTaskToServer } from "../../../features/tasks/TaskSlice";

export default function EditTask() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { id } = useParams();
  const { tasks, loading } = useSelector((state) => state.task);
  const [taskFormData, settaskFormData] = useState([]);
  let task;
  useEffect(() => {
    if (!loading && tasks[0] !== undefined) {
     
     task = tasks[0].filter((task) => task.id == id)[0];
      settaskFormData(task);
    }
  }, [tasks]);

  const handleInputs = (event) => {
    const value =
      event.target.type === "checkbox"
        ? event.target.checked
        : event.target.value;
    settaskFormData({
      ...taskFormData,
      [event.target.name]: value,
    });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
 
    dispatch(editTaskToServer({ id: id, task: taskFormData }));
    navigate(`/tasks`);
  };




  return (
    <div>
      {!loading &&
      taskFormData.hasOwnProperty("id") == true ? (
        <div className="text-gray-lighter">
          <div className="flex items-center bg-pink-dark h-screen w-full bg-opacity-40 mx-auto">
            <div className="text-gray-lighter w-1/2 bg-gray-dark p-5 rounded-xl mx-auto">
              <form onSubmit={handleSubmit} className=" ">
                <div className="mb-2">
                  <label
                    className="block text-sm tracking-wide mb-1 text-pink-dark"
                    htmlFor="title"
                  >
                    Task Title
                  </label>
                  <input
                    className="w-full bg-gray-light appearance-none rounded p-2  outline-none text-white"
                    type="text"
                    id="title"
                    name="title"
                    value={taskFormData.title}
                    onChange={handleInputs}
                    required
                  />
                </div>
                <div className="mb-2">
                  <label
                    className="text-pink-dark block text-sm tracking-wide mb-1"
                    htmlFor="description"
                  >
                    Description
                  </label>
                  <textarea
                    className="w-full bg-gray-light appearance-none rounded p-2  text-white"
                    id="description"
                    name="description"
                    value={taskFormData.description}
                    onChange={handleInputs}
                    required
                  />
                </div>
                <div className="mb-2 flex items-center justify-between">
                  <div className=" bg-gray-dark rounded bg-gray-light  p-2">
                    <label
                      className="block text-sm tracking-wide mb-1 text-pink-light"
                      htmlFor="start_date"
                    >
                      Start Date
                    </label>
                    <input
                      className="w-full bg-gray-light appearance-none text-white"
                      type="date"
                      id="start_date"
                      name="start_date"
                      value={taskFormData.start_date.split("T")[0]}
                      onChange={handleInputs}
                      required
                    />
                  </div>
                  <div className=" bg-gray-dark rounded bg-gray-light  p-2">
                    <label
                      className="block text-sm tracking-wide mb-1 text-pink-light"
                      htmlFor="start_time"
                    >
                      Start Time
                    </label>
                    <input
                      className="w-full bg-gray-light appearance-none  text-white"
                      type="time"
                      id="start_time"
                      name="start_time"
                      value={
                        new Date(taskFormData.start_time)
                          .toUTCString()
                          .split(" ")[4]
                      }
                      onChange={handleInputs}
                      required
                    />
                  </div>
                </div>
                <div className="mb-2 flex items-center justify-between">
                  <div className=" bg-gray-dark rounded bg-gray-light  p-2">
                    <label
                      className="block text-sm tracking-wide mb-1 text-pink-light"
                      htmlFor="end_date"
                    >
                      End Date
                    </label>
                    <input
                      className="w-full bg-gray-light appearance-none  text-white placeholder:text-xs"
                      type="date"
                      id="end_date"
                      name="end_date"
                      value={taskFormData.end_date.split("T")[0]}
                      onChange={handleInputs}
                      required
                    />
                  </div>
                  <div className=" bg-gray-dark rounded bg-gray-light  p-2">
                    <label
                      className="block text-sm tracking-wide mb-1 text-pink-light"
                      htmlFor="end_time"
                    >
                      End Time
                    </label>
                    <input
                      className="w-full bg-gray-light appearance-none text-white "
                      type="time"
                      id="end_time"
                      name="end_time"
                      value={
                        new Date(taskFormData.end_time)
                          .toUTCString()
                          .split(" ")[4]
                      }
                      onChange={handleInputs}
                      required
                    />
                  </div>
                </div>
                <div className="mb-2 mt-4">
                  <label
                    className="block text-sm tracking-wide mb-1 text-pink-dark"
                    htmlFor="category_id"
                  >
                    Category
                  </label>

                  <select
                    id="category_id"
                    name="category_id"
                    className="w-full bg-gray-light appearance-none rounded p-2  text-white"
                    value={taskFormData.category_id}
                    onChange={handleInputs}
                    required
                  >
                    {categories.map((cat) => (
                      <option value={cat.name}>{cat.name}</option>
                    ))}
                  </select>
                </div>
                <div className=" bg-gray-dark rounded  p-2 flex items-center justify-between mt-3">
                  <div className="flex items-center">
                    <div className="p-2 bg-gray-dark me-2">
                      <BellIcon />
                    </div>

                    <label
                      className="block text-sm tracking-wide mb-1 "
                      htmlFor="reminder"
                    >
                      Reminder
                    </label>
                  </div>

                  <label className="relative inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      id="reminder"
                      name="reminder"
                      value={taskFormData.reminder}
                      onChange={handleInputs}
                      className="sr-only peer"
                    />
                    <ToggleButton />
                    <span className="ml-3 text-sm font-medium ">
                      {taskFormData.reminder ? "on" : "off"}
                    </span>
                  </label>
                </div>
                <div className=" bg-gray-dark rounded  p-2 flex items-center justify-between mt-3">
                  <div className="flex items-center">
                    <div className="p-2 bg-gray-dark me-2">
                      <LinkIcon />
                    </div>

                    <label
                      className="block text-sm tracking-wide mb-1 "
                      htmlFor="status"
                    >
                      Mark as complete
                    </label>
                  </div>

                  <label className="relative inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      id="status"
                      name="status"
                      value={taskFormData.status}
                      onChange={handleInputs}
                      className="sr-only peer"
                    />
                    <ToggleButton />
                    <span className="ml-3 text-sm font-medium ">
                      {taskFormData.status ? "on" : "off"}
                    </span>
                  </label>
                </div>
                <div className="text-center flex justify-between">
                  <Button text={"Edit"} type={"submit"} />
                  <div>
                    <Button
                      text={"Back"}
                      clicked={`/tasks/${id}`}
                    />
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      ) : (
        <h4>task is loading</h4>
      )}
    </div>
  );
}