import { ReactComponent as CloseBtn } from '../../assets/images/close.svg';
import css from './style.module.scss';

const AlertBox = ({ errors, setShowAlert }) => {
  const getErrors = () => Object.values(errors).filter((text) => text !== '');
  return (
    <div className={css.alert}>
      <CloseBtn onClick={() => setShowAlert(false)} className={css.btn} fill="#8b8b8b" width={15} height={15} />
      <p className={css.title}>Bitte korrigieren Sie die Fehler unten:</p>
      <ul>
        {getErrors().map((text) => (
          <li key={text}>{text}</li>
        ))}
      </ul>
    </div>
  );
};

export default AlertBox;
