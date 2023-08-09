import React from "react";
import { Spinner } from "../assets/iconsandsvgs";

export default function LoadingSpinner() {
  return (
    <div className="flex items-center">
      <div role="status" className="mx-auto">
        <Spinner />
        <span className="sr-only">Loading...</span>
      </div>
    </div>
  );
}
