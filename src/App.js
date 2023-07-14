import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Guest from "./pages/guest";
import Register from "./pages/guest/pages/Register.js";
import GuestMain from "./pages/guest/pages";
import Login from "./pages/guest/pages/Login";
import User from "./pages/user";
import UserLandingPage from "./pages/user/pages/UserLandingPage";
import Tasklist from "./pages/user/pages/Tasklist";
import CreateTask from "./pages/user/CreateTask";
import ViewTask from "./pages/user/pages/ViewTask";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Guest />,
    children: [
      {
        path: "/",
        element: <GuestMain />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/login",
        element: <Login />,
      },
    ],
  },
  {
    path: "/",
    element: <User />,
    children: [
      {
        path: "/welcome",
        element: <UserLandingPage />,
      },
      {
        path: "/tasks",
        element: <Tasklist />,
      },
      {
        path: "/tasks/:id",
        element: <ViewTask />,
      },
    ],
  },
]);

function App() {
  return (
    <div className="font-poppins text-gray-lighter">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
