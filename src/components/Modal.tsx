import React, { forwardRef, useImperativeHandle, useState } from "react";

interface ModalProps {
  onClose: () => void;
  title: string;
  closeButtonContent?: React.ReactNode;
  children: React.ReactNode;
}

export interface ModalHandle {
  openModal: () => void;
  closeModal: () => void;
}

const Modal: React.ForwardRefRenderFunction<ModalHandle, ModalProps> = (
  { onClose, title, closeButtonContent, children },
  ref
) => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    onClose();
  };

  useImperativeHandle(ref, () => ({
    openModal,
    closeModal,
  }));

  const closeButtonText = closeButtonContent || "×";

  return isOpen ? (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={closeModal}>
          {closeButtonText}
        </span>
        <h2>{title}</h2>
        <div>{children}</div>
      </div>
    </div>
  ) : null;
};

export default forwardRef(Modal);
