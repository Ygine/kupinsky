import { Outlet } from 'react-router-dom';
import { CustomLink } from './CustomLink';
import ContactBtn from '../components/ContactBtn';

import Footer from '../components/Footer';

export default function Layout() {
  // const setActiveLink = ({isActive}) =>
  //   `p-2 hover:bg-teal-500 ${isActive ? 'active-link' : ''}`;

  return (
    <>
      <header className="">
        <CustomLink to="/" className="">
          Home
        </CustomLink>
        <CustomLink to="/posts" className="">
          Blog
        </CustomLink>
        <CustomLink to="/about" className="">
          About
        </CustomLink>
      </header>

      <main className="main">
        <Outlet />
      </main>

      <ContactBtn />

      <Footer />
    </>
  );
}
