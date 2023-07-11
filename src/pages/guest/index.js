import React from "react";
import GuestNavbar from "./guestnavbar";
import GuestMain from "./pages";

export default function Guest() {
  return (
    <div className="min-h-screen bg-gray-dark">
      <GuestNavbar />
      <GuestMain />
    </div>
  );
}
