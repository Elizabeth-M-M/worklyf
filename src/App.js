import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Guest from "./pages/guest";

const router= createBrowserRouter([
  {
    path:'/',
    element:<Guest/>
  }
])


function App() {
  return (
    <div className="font-poppins text-gray-lighter">
      <RouterProvider router={router}/>
    </div>
  );
}

export default App;
