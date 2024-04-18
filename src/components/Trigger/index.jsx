import { useState } from 'react';
import { ReactComponent as Message } from '../../assets/images/message.svg';
import { CSSTransition } from 'react-transition-group';
import Modal from '../Modal';
import TriggerContent from '../TriggerContent';

import css from './style.module.scss';
import modalTransition from '../../styles/transitions/fade.module.scss';

const TriggerBtn = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const handleClickSupportBtn = (e) => {
    setModalIsOpen(!modalIsOpen);
  };

  return (
    <>
      <button className={css.support} onClick={handleClickSupportBtn}>
        <Message width={30} height={30} fill="#fff" />
        <span className={css.dots}>
          <span></span>
          <span></span>
          <span></span>
        </span>
      </button>

      <CSSTransition classNames={modalTransition} in={modalIsOpen} timeout={300} unmountOnExit>
        <Modal closeModal={handleClickSupportBtn}>
          <TriggerContent />
        </Modal>
      </CSSTransition>
    </>
  );
};

export default TriggerBtn;
