import ScrollArrow from '../../hook/useScrollTop.js';
import SocialLinks from '../SocialLinks';
import { ReactComponent as Chevron } from '../../assets/images/chevron.svg';

import css from './style.module.scss';

const Footer = ({ className = '' }) => {
  const { scrollTop } = ScrollArrow();

  return (
    <footer className={`${css.footer} ${className}`}>
      <div onClick={scrollTop} className={css.arrowTop}>
        <Chevron width={20} height={20} />
      </div>

      <SocialLinks />

      <div className="footer-content">
        <p className={css.name}> Alisa Kupinsky </p>
        <p className={css.profession}> Produktfotografin aus Rastatt </p>
        <p className={css.copyright}>
          ALLE INHALTE, INSBESONDERE TEXTE, FOTOGRAFIEN UND GRAFIKEN SIND URHEBERRECHTLICH GESCHÜTZT, ALLE RECHTE
          EINSCHLIESSLICH VERVIELFÄLTIGUNG, VERÖFFENTLICHUNG, BEARBEITUNG UND ÜBERSETZUNG, BLEIBEN VORBEHALTEN.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
