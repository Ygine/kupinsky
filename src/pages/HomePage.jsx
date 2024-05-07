import ContactForm from '../components/ContactForm';
import MyGallery from '../components/MyGallery';
import AboutMe from '../components/AboutMe';

export default function HomePage() {
  return (
    <>
      <MyGallery />
      <AboutMe />
      <ContactForm />
    </>
  );
}
