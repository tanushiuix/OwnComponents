import React, { useRef } from "react";
import Modal, { ModalHandle } from "./components/Modal";

const App: React.FC = () => {
  const modalRef = useRef<ModalHandle>(null);

  const openModal = () => {
    if (modalRef.current) {
      modalRef.current.openModal();
    }
  };

  const closeModal = () => {
    if (modalRef.current) {
      modalRef.current.closeModal();
    }
  };

  return (
    <div className="App">
      <button onClick={openModal}>Open Modal</button>
      <Modal
        ref={modalRef}
        onClose={() => console.log("Modal closed")}
        title="Sample Modal"
        closeButtonContent="Close"
      >
        <p>This is the content of the modal.</p>
        <button onClick={closeModal}>Close Modal</button>
      </Modal>
    </div>
  );
};

export default App;
