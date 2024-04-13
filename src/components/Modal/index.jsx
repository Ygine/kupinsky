import { useEffect, useRef } from 'react';
import { ReactComponent as CloseBtn } from '../../assets/images/close.svg';
//style
import css from './style.module.scss';

const Modal = ({ closeModal, children }) => {
  const backDrop = useRef();

  useEffect(() => {
    window.addEventListener('keydown', handleKeyPress);
    return () => {
      window.removeEventListener('keydown', handleKeyPress);
    };
  });

  const handleKeyPress = (e) => {
    if (e.code !== 'Escape') {
      return;
    }
    closeModal(e);
  };

  const handleBackdropClick = ({ target }) => {
    const { current } = backDrop;
    if (target !== current) {
      return;
    }
    closeModal(target);
  };
  return (
    <div className={css.backdrop} ref={backDrop} onClick={(e) => handleBackdropClick(e)}>
      <div className={css.modalContent}>
        <div className={css.closeBtn} onClick={closeModal}>
          <CloseBtn fill="#5b5b5b" width={20} height={20} />
        </div>
        <div>{children}</div>
      </div>
    </div>
  );
};

export default Modal;
