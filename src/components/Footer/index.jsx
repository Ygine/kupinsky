import { ReactComponent as Whatsap } from '../../assets/images/whatsaap.svg';
import { ReactComponent as Instagram } from '../../assets/images/instagram.svg';

import styles from './style.module.scss';

const Footer = () => {
  return (
    <footer className={`${styles.footer}`}>
      {/* <div className="back-to-top js-back-to-top">
          <i className="fal fa-chevron-up"></i>
        </div> */}
      <ul className={`${styles.socialLinks}`}>
        <li className="item">
          <a title="whatsapp" className="link" target="_blank" rel="noopener noreferrer" href="#">
            <Whatsap width={33} height={33} fill="#3d3d3d" />
          </a>
        </li>
        <li className="item">
          <a title="instagram" className="link" target="_blank" rel="noopener noreferrer" href="#">
            <Instagram width={33} height={33} fill="#3d3d3d" />
          </a>
        </li>
      </ul>
      <div className="footer-content">
        <p className={styles.name}> Alisa Kupinsky </p>
        <p className={styles.profession}> Produktfotografin aus Rastatt </p>
        <p className={styles.copyright}>
          ALLE INHALTE, INSBESONDERE TEXTE, FOTOGRAFIEN UND GRAFIKEN SIND URHEBERRECHTLICH GESCHÜTZT, ALLE RECHTE
          EINSCHLIESSLICH VERVIELFÄLTIGUNG, VERÖFFENTLICHUNG, BEARBEITUNG UND ÜBERSETZUNG, BLEIBEN VORBEHALTEN.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
