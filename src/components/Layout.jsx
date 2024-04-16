import { Outlet } from 'react-router-dom';
import { CustomLink } from './CustomLink';
import ContactBtn from '../components/ContactBtn';
import ArrowTop from '../components/ArrowTop';

import Footer from '../components/Footer';

export default function Layout() {
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

      <ArrowTop />
      <ContactBtn />
      <Footer />
    </>
  );
}
