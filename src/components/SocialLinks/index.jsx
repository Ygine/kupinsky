import { Link } from 'react-router-dom';
import { ReactComponent as Whatsap } from '../../assets/images/whatsaap.svg';
import { ReactComponent as Instagram } from '../../assets/images/instagram.svg';

import css from './style.module.scss';

const SocialLinks = ({ className = '', ...rest }) => {
  return (
    <ul {...rest} className={`${css.socialLinks} ${className}`}>
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
  );
};

export default SocialLinks;
