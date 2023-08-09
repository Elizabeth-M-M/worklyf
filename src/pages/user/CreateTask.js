import React, { useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import Button from "../../components/Button";
import { categories } from "../../assets/tasks";
import { ClockIcon } from "../../assets/iconsandsvgs";
import { useDispatch, useSelector } from "react-redux";
import { closeCreateTask } from "../../features/modal/ModalSlice";
import { addTaskToServer} from "../../features/tasks/TaskSlice";
import { toggleBtnStyle } from "../../assets/extramethods";

export default function CreateTask() {
  const [searchParams, setSearchParams] = useSearchParams();
  let type = searchParams.get("type");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.user);
  const { error } = useSelector((state) => state.task);
  const [taskFormData, settaskFormData] = useState({
    title: "",
    description: "",
    start_date: "",
    start_time: "",
    end_date: "",
    end_time: "",
    category_id: "",
    label: "",
    reminder: false,
    group_id: null,
  });

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
    const selectedGroup = type == "Personal" ? 1 : 2;
    // dispatch(
    //   addTaskToServer({
    //     id: user[0].id,
    //     task: { ...taskFormData, group_id: selectedGroup },
    //   })
    // ).then((data) => {
    //   if (data.payload.errors === undefined) {

    //     dispatch(closeCreateTask());
    //     navigate(`/tasks?type=${type}`);
    //     settaskFormData({
    //       title: "",
    //       description: "",
    //       start_date: "",
    //       start_time: "",
    //       end_date: "",
    //       end_time: "",
    //       category_id: "",
    //       reminder: false,
    //     });
    //   }
    // });
  };

  return (
    <div className="text-gray-lighter bg-gray-dark rounded-lg p-5">
      <div>
        <div className="w-full mx-auto">
          <h3 className="text-3xl font-bold mb-1 py-3">Create New Task</h3>
          <form onSubmit={handleSubmit} className=" ">
            <div className="grid md:grid-cols-2 gap-x-6">
              <div>
                <div className="mb-2">
                  <label
                    className="block text-sm tracking-wide mb-1"
                    htmlFor="title"
                  >
                    Task Title
                  </label>
                  <input
                    className="w-full bg-gray-light appearance-none rounded p-2 shadow-[inset_0_-2px_4px_rgba(0,0,0,0.6)] outline-none text-white"
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
                    className="block text-sm tracking-wide mb-1"
                    htmlFor="description"
                  >
                    Description
                  </label>
                  <textarea
                    className="w-full bg-gray-light appearance-none rounded p-2 shadow-[inset_0_-2px_4px_rgba(0,0,0,0.6)] text-white"
                    id="description"
                    name="description"
                    value={taskFormData.description}
                    onChange={handleInputs}
                    required
                  />
                </div>
                <div className="mb-2 flex items-center justify-between">
                  <div className="shadow-[inset_0_-2px_4px_rgba(0,0,0,0.6)] bg-gray-light rounded  p-2">
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
                      value={taskFormData.start_date}
                      onChange={handleInputs}
                      required
                    />
                  </div>
                  <div className="shadow-[inset_0_-2px_4px_rgba(0,0,0,0.6)] bg-gray-light rounded  p-2">
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
                      value={taskFormData.start_time}
                      onChange={handleInputs}
                      required
                    />
                  </div>
                </div>
                <div className="mb-2 flex items-center justify-between">
                  <div className="shadow-[inset_0_-2px_4px_rgba(0,0,0,0.6)] bg-gray-light rounded  p-2">
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
                      value={taskFormData.end_date}
                      onChange={handleInputs}
                      required
                    />
                  </div>
                  <div className="shadow-[inset_0_-2px_4px_rgba(0,0,0,0.6)] bg-gray-light rounded  p-2">
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
                      value={taskFormData.end_time}
                      onChange={handleInputs}
                      required
                    />
                  </div>
                </div>
              </div>
              <div>
                <div className="mb-2 mt-4">
                  <label
                    className="block text-sm tracking-wide mb-1"
                    htmlFor="category_id"
                  >
                    Category
                  </label>
                  <select
                    id="category_id"
                    name="category_id"
                    className="w-full bg-gray-light appearance-none rounded p-2 shadow-[inset_0_-2px_4px_rgba(0,0,0,0.6)] text-white"
                    value={taskFormData.category_id}
                    onChange={handleInputs}
                    required
                  >
                    {categories.map((cat) => (
                      <option key={cat.id} value={cat.id}>
                        {cat.name}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="mb-2 mt-4">
                  <label
                    className="block text-sm tracking-wide mb-1"
                    htmlFor="label"
                  >
                    Urgency
                  </label>
                  <select
                    id="label"
                    name="label"
                    className="w-full bg-gray-light appearance-none rounded p-2 shadow-[inset_0_-2px_4px_rgba(0,0,0,0.6)] text-white"
                    value={taskFormData.label}
                    onChange={handleInputs}
                    required
                  >
                    <option value="urgent">urgent</option>
                    <option value="moderate">moderate</option>
                    <option value="non-urgent">non-urgent</option>
                  </select>
                </div>
                <div className="shadow-[inset_0_-2px_4px_rgba(0,0,0,0.6)] bg-gray-light rounded  p-2 flex items-center justify-between mt-3">
                  <div className="flex items-center">
                    <div className="p-2 bg-gray-dark me-2">
                      <ClockIcon />
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
                    <div className={toggleBtnStyle}></div>
                    <span className="ml-3 text-sm font-medium ">
                      {taskFormData.reminder ? "on" : "off"}
                    </span>
                  </label>
                </div>
              </div>
            </div>

            <div className="text-center flex justify-between">
              <Button text={"Create Task"} type={"submit"} />
              <div
                onClick={() => {
                  dispatch(closeCreateTask());
                }}
              >
                <Button text={"Close"} type={"submit"} />
              </div>
            </div>
          </form>
          {error
            ? error.map((err) => (
                <p key={err} className="text-xs text-pink-light mt-1">
                  {err}
                </p>
              ))
            : null}
        </div>
      </div>
    </div>
  );
}
