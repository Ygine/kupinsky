import { CSSTransition } from 'react-transition-group';
import { NavLink } from 'react-router-dom';
import css from './style.module.scss';

const Menu = () => {
  return (
    <CSSTransition in={menuIsOpen} timeout={300} unmountOnExit>
      <div className={'menu ' + (menuIsOpen ? ' active' : '')}>
        <nav onClick={handleMenuClick}>
          <li>
            <NavLink to="/messages" className={({ isActive }) => (isActive ? 'active' : '')}>
              Messages
            </NavLink>
          </li>
        </nav>
      </div>
    </CSSTransition>
  );
};

export default Menu;
