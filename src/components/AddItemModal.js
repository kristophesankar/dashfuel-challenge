import React, { useState } from "react";
import Modal from "./Modal/Modal";
import ItemForm from "./ItemForm";
import MaterialButton from "./MaterialButton";

export default function AddItemModal() {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(true);
  };

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
        <ItemForm title="Add Item" type="edit" />
      </Modal>
    </div>
  );
}
