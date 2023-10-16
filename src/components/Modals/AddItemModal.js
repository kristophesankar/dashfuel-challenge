import React, { useState } from "react";
import Modal from "./Modal";
import AddItemForm from "../Forms/AddItemForm";
import MaterialButton from "../Buttons/MaterialButton";

/**
 * A component representing an "Add Item" modal.
 *
 * This component provides a button to open a modal dialog for adding an item.
 * When the modal is open, it displays an "Add Item" form.
 */
export default function AddItemModal() {
  const [isOpen, setIsOpen] = useState(false);

  /**
   * Opens the modal dialog.
   */
  const handleOpen = () => {
    setIsOpen(true);
  };

  /**
   * Closes the modal dialog.
   */
  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <div>
      <MaterialButton
        title="+"
        classNames="add-item__button"
        handleOpen={handleOpen}
      />

      <Modal hasCloseBtn={true} isOpen={isOpen} onClose={handleClose}>
        <AddItemForm title="Add Item" type="edit" />
      </Modal>
    </div>
  );
}
