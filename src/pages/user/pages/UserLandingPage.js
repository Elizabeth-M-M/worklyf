import React, { useEffect } from "react";
import { FilterIcon, SearchIcon, UserIcon } from "../../../assets/icons";
import Status from "../Status";
import Category from "../Category";
import TaskCard from "../TaskCard";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { pillStyle, userCookieValue } from "../../../assets/extramethods";
import { getUser } from "../../../features/user/UserSlice";
import {
  displayProfileMenu,
  displayTaskMenu,
  openCreateTask,
  openEditProfileTab,
  openViewProfileTab,
} from "../../../features/modal/ModalSlice";
import Modal from "../../../components/Modal";
import EditProfile from "../EditProfile";
import ViewProfile from "../ViewProfile";
import Button from "../../../components/Button";
import CreateTask from "../CreateTask";

export default function UserLandingPage() {
   const { showCreateTask } = useSelector((store) => store.modal);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const userId = userCookieValue("userid=");
  useEffect(() => {
    dispatch(getUser({ id: userId }));
  }, [userId]);
  const { user, loading } = useSelector((state) => state.user);
  const { tasks, loading: isLoading } = useSelector((state) => state.task);
  const { showProfileMenu } = useSelector((state) => state.modal);
  const { showEditProfileTab } = useSelector((state) => state.modal);
  const { showViewProfileTab } = useSelector((state) => state.modal);

  const { showTaskMenu } = useSelector((state) => state.modal);
  // console.log(user)
  return (
    <>
      {!user && !loading ? (
        <p>Please wait....</p>
      ) : !user ? (
        <p>Please wait....</p>
      ) : (
        <div className="py-5 px-8 text-gray-lighter">
          <div className="flex align-center justify-between">
            <div>
              <h4 className="font-bold text-3xl tracking-wide">
                Hi {user[0].profile.full_name}
              </h4>
              <p className="text-pink-dark tracking-wide text-sm my-2 mb-5 md:mb-0">
                {user[0].summary.pending} tasks pending
              </p>
            </div>
            <div className="relative">
              <div onClick={() => dispatch(displayProfileMenu())}>
                <UserIcon />
              </div>

              {showProfileMenu ? (
                <div className="absolute top-10 right-10  ">
                  <p
                    className={pillStyle}
                    onClick={() => {
                      dispatch(displayProfileMenu());
                      dispatch(openViewProfileTab());
                    }}
                  >
                    View Profile
                  </p>
                  <p
                    className={pillStyle}
                    onClick={() => {
                      dispatch(displayProfileMenu());
                      dispatch(openEditProfileTab());
                    }}
                  >
                    Edit Profile
                  </p>
                  <p
                    className={pillStyle}
                    onClick={() => {
                      dispatch(displayProfileMenu());
                      navigate("/");
                    }}
                  >
                    Logout
                  </p>
                </div>
              ) : null}
            </div>
          </div>
          <div className="md:grid grid-cols-2 gap-8">
            <div>
              <Status
                pending={user[0].summary.pending}
                completed={user[0].summary.complete}
              />
              <Category
                work={user[0].summary.work}
                personal={user[0].summary.personal}
              />
            </div>

            <div className="mt-6 md:mt-0">
              <div className="flex items-center justify-between">
                <h4 className="font-bold tracking-wide text-xl pb-3">Tasks</h4>
                <div className="relative">
                  {!user && !loading ? null : user[0].pending[0].length == 0 &&
                    user[0].completed[0].length == 0 ? (
                    <div
                      onClick={() => {
                        dispatch(displayTaskMenu());
                      }}
                    >
                      <Button text={"Start here"} />
                    </div>
                  ) : (
                    <p
                      className="text-xs tracking-wide text-pink-light cursor-pointer hover:text-white"
                      onClick={() => {
                        dispatch(displayTaskMenu());
                      }}
                    >
                      See all
                    </p>
                  )}

                  {showTaskMenu ? (
                    <div className="absolute top-2 right-12  ">
                      <p
                        className={pillStyle}
                        onClick={() => {
                          dispatch(displayTaskMenu());
                          navigate("/tasks?type=Personal");
                        }}
                      >
                        Personal
                      </p>
                      <p
                        className={pillStyle}
                        onClick={() => {
                          dispatch(displayTaskMenu());
                          navigate("/tasks?type=Work");
                        }}
                      >
                        Work
                      </p>
                    </div>
                  ) : null}
                </div>
              </div>
              {!user && !loading ? null : user[0].pending[0].length == 0 &&
                user[0].completed[0].length == 0 ? (
                <div>
                  <p className="text-pink-light">You have no tasks</p>
                  <p className="text-xs mt-2">Click on "start here" and choose whether the task is for personal or work</p>
                </div>
              ) : null}
              {!user && !loading ? null : user[0].pending[0].length == 0 &&
                user[0].completed[0].length > 0 ? (
                <p>You have no pending tasks</p>
              ) : user[0].pending[0].length == 0 &&
                user[0].completed[0].length == 0 ? null : (
                <div>
                  <h4 className="font-bold tracking-wide text-lg text-pink-light pb-3 ">
                    Pending Tasks
                  </h4>
                  {user[0].pending[0].map((task) => (
                    <TaskCard key={task.id} task={task} />
                  ))}
                </div>
              )}
              {!user && !loading ? null : user[0].pending[0].length > 0 &&
                user[0].completed[0].length == 0 ? (
                <p>You currently have no completed tasks</p>
              ) : user[0].pending[0].length == 0 &&
                user[0].completed[0].length == 0 ? null : (
                <div>
                  <h4 className="font-bold tracking-wide text-lg text-pink-light pb-3">
                    Completed Tasks
                  </h4>
                  {user[0].completed[0].map((task) => (
                    <TaskCard key={task.id} task={task} />
                  ))}
                </div>
              )}
            </div>
          </div>
          {showEditProfileTab ? (
            <Modal>
              <EditProfile />
            </Modal>
          ) : null}
          {showViewProfileTab ? (
            <Modal>
              <ViewProfile />
            </Modal>
          ) : null}
          {showCreateTask ? (
            <Modal>
              <CreateTask />
            </Modal>
          ) : null}
        </div>
      )}
    </>
  );
}
