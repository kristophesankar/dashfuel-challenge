import React, { useEffect, useRef, useState } from "react";

/**
 * A modal component for displaying content in a dialog.
 *
 * @param {object} props - The component's properties.
 * @param {boolean} props.isOpen - Indicates whether the modal is open or closed.
 * @param {function} props.onClose - A callback function to be called when the modal is closed.
 * @param {ReactNode} props.children - The content to be displayed within the modal.
 */
export default function Modal({ isOpen, onClose, children }) {
  const modalReference = useRef(null);
  const [isModalOpen, setIsModalOpen] = useState(isOpen);

  /**
   * Closes the modal dialog and invokes the provided `onClose` callback if available.
   */
  const handleClose = () => {
    if (onClose) {
      onClose();
    }
    setIsModalOpen(false);
  };

  // Multiple useEffects to separate logic

  useEffect(() => {
    // Set the modal state based on the `isOpen` prop when initialized.
    setIsModalOpen(isOpen);
  }, [isOpen]);

  useEffect(() => {
    // Use the HTMLDialogElement API to control visibility of the modal dialog.
    // This allows showing or closing the dialog without conditional rendering.
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
      <div className="modal__content">
      {children}
      </div>
    </dialog>
  );
}
