import React, { useEffect, useState } from "react";
import {
  Link,
  useNavigate,
  useParams,
  useSearchParams,
} from "react-router-dom";
import Button from "../../../components/Button";
import { BellIcon, HomeIcon } from "../../../assets/iconsandsvgs";
import { useDispatch, useSelector } from "react-redux";
import { deleteTask} from "../../../features/tasks/TaskSlice";
import { userCookieValue } from "../../../assets/extramethods";
import { getUser } from "../../../features/user/UserSlice";
import LoadingSpinner from "../../../components/LoadingSpinner";

export default function ViewTask() {
  const [searchParams, setSearchParams] = useSearchParams();
  let type = searchParams.get("type");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { id } = useParams();
  const { tasks, loading } = useSelector((state) => state.task);
  const [task, setTask] = useState(null);
  const userId = userCookieValue("userid=");

  useEffect(() => {
    if (tasks !== undefined && !loading) {
      let found = tasks.filter((task) => task.id == id)[0];
      setTask(found);
    }
  }, [loading, tasks]);

  const handleDelete = () => {
    dispatch(deleteTask({ id }));
    dispatch(getUser({ id: userId }));
    navigate(`/tasks?type=${type}`);
  };

  return (
    <>
      {task && tasks !== undefined ? (
        <div>
          <div className="flex items-center justify-between">
            <div></div>
            <div className="flex px-4">
              <Link to={`/tasks?type=${type}`} className="ms-4 text-sm ">
                <p className="p-3 hover:text-pink-light">TASKS</p>
              </Link>
              <Link
                to="/welcome"
                className="ms-4 text-sm hover:text-pink-light"
              >
                <HomeIcon />
                <p>HOME</p>
              </Link>
            </div>
          </div>
          <div className="flex items-center bg-pink-dark h-full p-2 w-full bg-opacity-40 mx-auto">
            <div className="text-gray-lighter w-1/2 bg-gray-dark p-5 rounded-xl mx-auto">
              <div>
                <div className="w-full mx-auto">
                  <form className=" ">
                    <div className="mb-2">
                      <label
                        className="block text-sm tracking-wide mb-1 text-pink-dark"
                        htmlFor="title"
                      >
                        Task Title
                      </label>
                      <input
                        className="w-full bg-gray-dark appearance-none rounded py-2  outline-none text-white"
                        type="text"
                        value={task.title}
                        readOnly="readOnly"
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
                        className="w-full bg-gray-dark appearance-none rounded py-2  text-white"
                        value={task.description}
                        readOnly="readOnly"
                      />
                    </div>
                    <div className="mb-2 flex items-center justify-between">
                      <div className=" bg-gray-dark rounded  py-2">
                        <label
                          className="block text-sm tracking-wide mb-1 text-pink-light"
                          htmlFor="start_date"
                        >
                          Start Date
                        </label>
                        <input
                          className="w-full bg-gray-dark appearance-none text-white"
                          type="text"
                          value={task.start_date.split("T")[0]}
                          readOnly="readOnly"
                        />
                      </div>
                      <div className=" bg-gray-dark rounded  p-2">
                        <label
                          className="block text-sm tracking-wide mb-1 text-pink-light"
                          htmlFor="start_time"
                        >
                          Start Time
                        </label>
                        <input
                          className="w-full bg-gray-dark appearance-none  text-white"
                          type="text"
                          value={
                            new Date(task.start_time)
                              .toUTCString()
                              .split(" ")[4]
                          }
                          readOnly="readOnly"
                        />
                      </div>
                    </div>
                    <div className="mb-2 flex items-center justify-between">
                      <div className=" bg-gray-dark rounded  py-2">
                        <label
                          className="block text-sm tracking-wide mb-1 text-pink-light"
                          htmlFor="end_date"
                        >
                          End Date
                        </label>
                        <input
                          className="w-full bg-gray-dark appearance-none  text-white placeholder:text-xs"
                          type="text"
                          value={task.end_date.split("T")[0]}
                          readOnly="readOnly"
                        />
                      </div>
                      <div className=" bg-gray-dark rounded  p-2">
                        <label
                          className="block text-sm tracking-wide mb-1 text-pink-light"
                          htmlFor="end_time"
                        >
                          End Time
                        </label>
                        <input
                          className="w-full bg-gray-dark appearance-none text-white "
                          type="text"
                          value={
                            new Date(task.end_time).toUTCString().split(" ")[4]
                          }
                          readOnly="readOnly"
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
                      <input
                        className="w-full bg-gray-dark appearance-none text-white "
                        type="text"
                        value={task.category.name}
                        readOnly="readOnly"
                      />
                    </div>
                    <div className=" bg-gray-light rounded  p-2 flex items-center justify-between mt-3">
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
                        <span className="ml-3 text-sm font-medium ">
                          {task.reminder ? "on" : "off"}
                        </span>
                      </label>
                    </div>
                    <div className="text-center flex justify-between">
                      <Button
                        text={"Edit Task"}
                        clicked={`/tasks/${task.id}/edit?type=${type}`}
                      />
                      <div onClick={handleDelete}>
                        <Button text={"Delete"} />
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
       <LoadingSpinner/>
      )}
    </>
  );
}
