import { useState } from 'react';
import Button from '../Button';
import AlertBox from '../AlertBox';
import Container from '../Shared/Container';
import { CSSTransition } from 'react-transition-group';

import css from './style.module.scss';
import alertTransition from '../../styles/transitions/fade.module.scss';


const ContactForm = ({topContent, title, img}) => {
  const [showAlert, setShowAlert] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email_phone: '',
    message: '',
    errors: {
      name: '',
      email_phone: '',
      message: '',
    },
  });

  const handleAreaChange = (e) => {
    const {
      target: { value: areaText, name: areaName },
    } = e;
    setFormData({ ...formData, [areaName]: areaText });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let errors = {};
    errors.name = formData.name.trim().length < 1 ? 'Name muss ausgefüllt werden' : '';
    errors.email_phone =
      formData.email_phone.trim().length < 1 ? 'Email oder Telefonnummer muss ausgefüllt werden' : '';
    errors.message = formData.message.trim().length < 1 ? 'Worum geht’s? muss ausgefüllt werden' : '';
    setFormData({ ...formData, errors });

    if (errors.name || errors.email_phone || errors.message) {
      setShowAlert(true);
    } else {
      setShowAlert(false);
    }
  };

  const handleInputChange = (e) => {
    const {
      target: { value: inputText, name: inputName },
    } = e;
    setFormData({ ...formData, [inputName]: inputText });
  };

  return (
    <section className={css.formSection}>
      {topContent && (
        <div className={css.topContent}>
          <h2>{topContent}</h2>
        </div>
      )}

      <Container>
      <div className={css.formContent}>
        <img src={img} alt="form avater" />
        <div className={css.formWrap}>
          {title && (<h2 className={css.title}>{title}</h2>)}
          <CSSTransition classNames={alertTransition} in={showAlert} timeout={300} unmountOnExit>
            <AlertBox errors={formData.errors} setShowAlert={setShowAlert} />
          </CSSTransition>

          <form className="login-form" onSubmit={handleSubmit} noValidate>
            <div className={css.formGroup}>
              <input
                type="text"
                name="name"
                value={formData.name}
                placeholder="Name"
                onChange={handleInputChange}
                noValidate
              />
            </div>
            <div className={css.formGroup}>
              <input
                type="text"
                name="email_phone"
                value={formData.email_phone}
                placeholder="Email oder Phone"
                onChange={handleInputChange}
                noValidate
              />
            </div>
            <div className={css.formGroup}>
              <textarea
                name="message"
                value={formData.message}
                placeholder="Warum geht's"
                onChange={handleAreaChange}
              />
            </div>
            <Button className={'btn round-button'} title={'Project Anfragen'} type="submit" />
          </form>
        </div>
      </div>
      </Container>
    </section>
  );
};

export default ContactForm;
