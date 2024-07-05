import React, { useState, useEffect } from "react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  closeButtonContent?: React.ReactNode;
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  title,
  closeButtonContent,
  children,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(isOpen);

  useEffect(() => {
    setIsModalOpen(isOpen);
  }, [isOpen]);

  const closeModal = () => {
    setIsModalOpen(false);
    onClose();
  };

  const closeButtonText = closeButtonContent || "×";

  return isModalOpen ? (
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

export default Modal;
