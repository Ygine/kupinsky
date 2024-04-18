import { useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';
import MenuData from '../../data/menu.json';
import SocialLinks from '../SocialLinks';

import css from './style.module.scss';
import menuTransition from '../../styles/transitions/fade.module.scss';

const Menu = ({ menuIsOpen, setMenuIsOpen }) => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    let timer = [];
    const navList = document.querySelectorAll('nav > li, #social_menu');

    if (menuIsOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    for (let i = 0; i < navList.length; i++) {
      setTimeout(() => {
        navList[i].classList.add(css.visible);
      }, 80 * (i + 1));
    }

    return () => {
      clearTimeout(timer);
    };
  }, [menuIsOpen]);

  return (
    <CSSTransition classNames={menuTransition} in={menuIsOpen} timeout={300} unmountOnExit>
      <div className={`${css.menu}`}>
        <div className={css.menuWrap}>
          <nav onClick={setMenuIsOpen}>
            {MenuData.map((item) => (
              <li key={item.name} className={`${css.menuItem}`}>
                <NavLink
                  to={item.url}
                  className={({ isActive }) => (isActive || (pathname === '/' && item.default) ? css.activeLink : '')}
                >
                  {item.name}
                </NavLink>
              </li>
            ))}
          </nav>

          <SocialLinks id="social_menu" className={css.socialsInMenu} />
        </div>
      </div>
    </CSSTransition>
  );
};

export default Menu;
