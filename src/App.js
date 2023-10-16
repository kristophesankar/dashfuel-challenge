import React from "react";
import AddItemModal from "./components/AddItemModal";
import CustomTimeline from "./components/CustomTimeline";

/**
 * The main application component.
 */
export default function App() {

  return (
    <>
      <AddItemModal />
      <CustomTimeline />
    </>
  );
}
