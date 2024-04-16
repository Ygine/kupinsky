import { Link } from 'react-router-dom';
import LogoImage from '../../assets/images/logo.jpg';
import css from './style.module.scss';

const Header = () => {
  return (
    <div className={css.header}>
      <Link>
        <img width={50} height={50} src={LogoImage} alt="logo" />
      </Link>
      <button class={css.menuButton} label="menu" type="button">
        <div class={`${css.menuButtonIcon}  ${css.active}`}>
          <span></span>
        </div>
      </button>
    </div>
  );
};

export default Header;
