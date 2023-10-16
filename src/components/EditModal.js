import React, { useState } from "react";
import IconEdit from "./Icons/IconEdit";
import Modal from "./Modal/Modal";
import ModalButton from "./ModalButton";
import AddItemForm from "./AddItemForm";

export default function EditModal() {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <div>
      <ModalButton title="Edit" handleOpen={handleOpen}>
        <IconEdit />
      </ModalButton>
      <Modal hasCloseBtn={true} isOpen={isOpen} onClose={handleClose}>
        <AddItemForm />
      </Modal>
    </div>
  );
}
