import { Outlet } from 'react-router-dom';
import TriggerBtn from '../components/Trigger';
import ArrowTop from '../components/ArrowTop';
import useMobile from '../hook/useMobile';
import Sidebar from '../components/Sidebar';

import Footer from '../components/Footer';
import Header from '../components/Header';

export default function Layout() {
  const { mobile } = useMobile();

  return (
    <>
      {mobile && <Header />}

      <main className="main">
        {!mobile && <Sidebar />}
        <div className="content">
          <Outlet />
        </div>
      </main>

      {!mobile && <ArrowTop />}
      <TriggerBtn />
      {mobile && <Footer />}
    </>
  );
}
