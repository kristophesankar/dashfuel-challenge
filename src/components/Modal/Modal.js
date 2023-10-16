import React, { useEffect, useRef, useState } from "react";

export default function Modal({ isOpen, onClose, children }) {
  const modalReference = useRef(null);
  const [isModalOpen, setIsModalOpen] = useState(isOpen);

  const handleClose = () => {
    if (onClose) {
      onClose();
    }
    setIsModalOpen(false);
  };

  // multiple useEffects to separate logic

  useEffect(() => {
    // set the modal to the props when initialized
    setIsModalOpen(isOpen);
  }, [isOpen]);

  useEffect(() => {
    // use HTMLDialogElement API to control visiblity
    // cleaner this way instead of using conditional rendering
    const modalDialog = modalReference.current;
    if (modalDialog) {
      if (isModalOpen) {
        modalDialog.showModal();
      } else {
        modalDialog.close();
      }
    }
  }, [isModalOpen]);

  return (
    <dialog className="modal" ref={modalReference}>
      <button className="modal__close-button" onClick={handleClose}>
        &times;
      </button>
      {children}
    </dialog>
  );
}
