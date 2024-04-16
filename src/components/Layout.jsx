import { Outlet } from 'react-router-dom';
import ContactBtn from '../components/ContactBtn';
import ArrowTop from '../components/ArrowTop';

import Footer from '../components/Footer';
import Header from '../components/Header';

export default function Layout() {
  return (
    <>
      <Header />

      <main className="main">
        <Outlet />
      </main>

      <ArrowTop />
      <ContactBtn />
      <Footer />
    </>
  );
}
