import { Link } from 'react-router-dom';
import ScrollArrow from '../../hook/useScrollTop';

import { ReactComponent as Whatsap } from '../../assets/images/whatsaap.svg';
import { ReactComponent as Instagram } from '../../assets/images/instagram.svg';
import { ReactComponent as Chevron } from '../../assets/images/chevron.svg';

import css from './style.module.scss';

const Footer = () => {
  const { scrollTop } = ScrollArrow();

  return (
    <footer className={`${css.footer}`}>
      <div onClick={scrollTop} className={css.arrowTop}>
        <Chevron width={20} height={20} />
      </div>
      <ul className={`${css.socialLinks}`}>
        <li className="item">
          <Link title="whatsapp" className={css.link} to="https://wa.me/4915228021236">
            <Whatsap width={33} height={33} fill="#3d3d3d" />
          </Link>
        </li>
        <li className="item">
          <Link title="instagram" className={css.link} to="https://www.instagram.com/alisaa.photo/">
            <Instagram width={33} height={33} fill="#3d3d3d" />
          </Link>
        </li>
      </ul>
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
