import { useEffect } from "react";
import { ModalOverlay, ModalContent, ModalBtn, ModalBtnIcon, ModalImg } from "./Modal.styled";

export const Modal = ({ closeModal, item }) => {

  useEffect(() => {
    const handleKeyDown = e => {
      if (e.code === 'Escape') {
        closeModal();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [closeModal]);

  const handleBackdropClick = e => {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };

  return (
    <ModalOverlay onClick={handleBackdropClick}>
      <ModalContent>
        <ModalBtn type="button" onClick={closeModal}>
          <ModalBtnIcon size="40px"/>
        </ModalBtn>
        <ModalImg src={item.original} alt={item.title} />
      </ModalContent>
    </ModalOverlay>
  );
};