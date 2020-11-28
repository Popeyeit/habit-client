import ReactModal from 'react-modal';
import React from 'react';

interface IProps {
  children: JSX.Element;
  modalIsOpen: boolean;
  closeModal: () => void;
}

const Modal = ({ children, modalIsOpen, closeModal }: IProps) => {
  return (
    <ReactModal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      ariaHideApp={false}
      className="modal"
      overlayClassName="overlay"
    >
      {children}
      <button
        type="button"
        onClick={closeModal}
        className="modal_close__btn"
      ></button>
    </ReactModal>
  );
};

export default Modal;
