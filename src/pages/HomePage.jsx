import ContactForm from '../components/ContactForm';
import MyGallery from '../components/MyGallery';
import AboutMe from '../components/AboutMe';

import formImage from '../assets/images/photo_1.jpg';

export default function HomePage() {
  return (
    <>
      <MyGallery/>
      <AboutMe/>
      <ContactForm img={formImage} topContent={'Mache deine Projekte zu einem WOW mit mir.'}/>
    </>
  );
}
