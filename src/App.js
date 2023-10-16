import React from "react";
import AddItemModal from "./components/Modals/AddItemModal";
import CustomTimeline from "./components/Timelines/CustomTimeline";

/**
 * The main application component.
 *
 */
export default function App() {

  return (
    <>
      <AddItemModal />
      <CustomTimeline />
    </>
  );
}
