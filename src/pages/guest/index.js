import React from "react";
import GuestMain from "./pages";
import { Outlet } from "react-router-dom";

export default function Guest() {
  return (
    <div className="min-h-screen bg-gray-dark"> 
      <Outlet/>
    </div>
  );
}
