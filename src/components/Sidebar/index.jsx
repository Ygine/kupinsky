import { NavLink, useLocation } from 'react-router-dom';
import LogoImage from '../../assets/images/logo.jpg';
import MenuData from '../../data/menu.json';
import Footer from '../Footer';

import css from './style.module.scss';

const Sidebar = () => {
  const { pathname } = useLocation();

  return (
    <div className={css.sidebar}>
      <NavLink className={css.logo} to="/">
        <img width={90} height={90} src={LogoImage} alt="logo" />
      </NavLink>

      <nav className={css.navigation}>
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

      <Footer className={css.sidebarFooter} />
    </div>
  );
};

export default Sidebar;
