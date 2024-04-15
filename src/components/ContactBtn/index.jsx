import { useState } from 'react';
import { ReactComponent as Message } from '../../assets/images/message.svg';
import { CSSTransition } from 'react-transition-group';
import Modal from '../Modal';
import SupportContent from '../SupportContent';

import styles from './style.module.scss';
import modalTransition from '../../styles/transitions/fade.module.scss';

const ContactBtn = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const handleClickSupportBtn = (e) => {
    setModalIsOpen(!modalIsOpen);
  };

  return (
    <>
      <button className={styles.support} onClick={handleClickSupportBtn}>
        <Message width={30} height={30} fill="#fff" />
        <span className={styles.dots}>
          <span></span>
          <span></span>
          <span></span>
        </span>
      </button>

      <CSSTransition classNames={modalTransition} in={modalIsOpen} timeout={300} unmountOnExit>
        <Modal closeModal={handleClickSupportBtn}>
          <SupportContent />
        </Modal>
      </CSSTransition>
    </>
  );
};

export default ContactBtn;
