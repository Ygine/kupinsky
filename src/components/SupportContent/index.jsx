import Button from '../Button';
import { VCcard } from '../../hook/useVCcard';

import AvatarImg from '../../assets/images/logo.jpg';
import { ReactComponent as WhatsapIcon } from '../../assets/images/whatsaap.svg';
import css from './style.module.scss';

const SupportContent = () => {
  const { downloadTxtFile, CreateVCard } = VCcard();
  const handelClickVcf = () => {
    downloadTxtFile(CreateVCard());
  };

  return (
    <div className={css.trigger}>
      <img className={css.avatar} width={60} height={60} src={AvatarImg} alt="avatar" />
      <h3 className={css.name}> Alisa Kupinsky </h3>
      <p>Produktfotografin</p>
      <a className={css.tel} href="tel:+4915786606437">
        +4915786606437
      </a>
      <div className={css.email}>
        <a href="mailto:daria-medved@gmx.de">daria-medved@gmx.de</a>
      </div>

      <Button to={'https://wa.me/4915228021236'} className={'btn border-btn'} title={'WhatsApp'} Icon={WhatsapIcon} />
      <Button onClick={handelClickVcf} className={'btn button'} title={'Kontakt speichern'} />
    </div>
  );
};

export default SupportContent;
