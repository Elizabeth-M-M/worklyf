import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Guest from "./pages/guest";
import Register from "./pages/guest/pages/Register.js";
import GuestMain from "./pages/guest/pages";
import Login from "./pages/guest/pages/Login";
import User from "./pages/user";
import UserLandingPage from "./pages/user/pages/UserLandingPage";

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
    path: "/welcome",
    element: <User/>,
    children: [
      {
        path: "/welcome",
        element: <UserLandingPage/>,
      }
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
