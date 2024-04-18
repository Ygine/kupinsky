import { useState } from 'react';
import { Link } from 'react-router-dom';
import Menu from '../Menu';
import LogoImage from '../../assets/images/logo.jpg';
import css from './style.module.scss';

const Header = () => {
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const handleMenuOpen = () => {
    setMenuIsOpen(!menuIsOpen);
  };

  return (
    <>
      <div className={css.header}>
        {!menuIsOpen && (
          <Link to="/about_me">
            <img width={50} height={50} src={LogoImage} alt="logo" />
          </Link>
        )}
        <button onClick={handleMenuOpen} class={css.menuButton} label="menu" type="button">
          <div className={`${css.menuButtonIcon}  ${menuIsOpen ? css.active : ''}`}>
            <span></span>
          </div>
        </button>
      </div>
      <Menu menuIsOpen={menuIsOpen} setMenuIsOpen={handleMenuOpen} />
    </>
  );
};

export default Header;
