import { useEffect } from 'react';
import { createPortal } from 'react-dom';

const modalRoot = document.querySelector('#modal-root');

const Modal = ({ children, closeModal }) => {
  useEffect(() => {
    window.addEventListener('keydown', onCloseModal);
    return () => {
      window.removeEventListener('keydown', onCloseModal);
    };
  }, []);

  const onCloseModal = evt => {
    if (evt.code === 'Escape' || evt.target === evt.currentTarget) {
      closeModal();
    }
  };

  return createPortal(
    <div className="Overlay" onClick={onCloseModal}>
      <div className="Modal">{children}</div>
    </div>,
    modalRoot
  );
};

export default Modal;
