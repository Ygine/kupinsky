import css from './style.module.scss';

import LazyImage from '../../assets/images/photo_2.jpg'
import certificateImage from '../../assets/images/certificate_1.png'
import certificate2Image from '../../assets/images/certificate_2.jpg'
import certificate3Image from '../../assets/images/certificate_3.png'

const AboutMe = () => {
  return (
    <div className={css.content}>
      <h2 className={css.title}>Alisa Kupinskaia - dein professioneller Partner für hochwertige Produktfotografie</h2>
      <p className={css.subTitle}>About me</p>
      <p className={css.name}>Alisa Kupinskaia</p>
      <p>Willkommen bei Alisa Kupinskaia - Deinem professionellen Partner für
        hochwertige Produktfotografie in Hamburg!</p>
      <p> Als ausgelernte Produktfotografin habe ich es mir zum Ziel gesetzt,
        Start-ups, Klein- und Mittelständischen Unternehmen sowie
        Full-Service-Agenturen tatkräftig bei ihren E-Commerce-Geschäften zu
        unterstützen. Mein Ziel ist es, dir professionelle Produktfotos zu
        liefern, die deine Produkte im besten Licht präsentieren und deine
        Social-Media-Kanäle, Webseite oder deinen Amazon-Shop zum Strahlen
        bringen.</p>
      <p>Mit meiner langjährigen Erfahrung und meinem kreativen Auge sorge ich
        dafür, dass deine Produkte perfekt in Szene gesetzt werden. Dabei
        arbeite ich eng mit einem talentierten Grafikdesigner und einem professionellen Bildbearbeiter zusammen. Dieses
        eingespielte Team ermöglicht es uns, all deine
        Wünsche und Vorstellungen umzusetzen. Egal, ob du nach klassischen
        Produktfotos, atmosphärischen Lifestyle-Bildern suchst - wir sind für dich da.</p>
      <p> Mit meiner langjährigen Erfahrung und meinem kreativen Auge sorge ich
        dafür, dass deine Produkte perfekt in Szene gesetzt werden. Dabei
        arbeite ich eng mit einem talentierten Grafikdesigner und einem professionellen Bildbearbeiter zusammen.
        Dieses eingespielte Team ermöglicht es uns, all deine
        Wünsche und Vorstellungen umzusetzen. Egal, ob du nach klassischen
        Produktfotos, atmosphärischen Lifestyle-Bildern suchst - wir sind für dich da.</p>
      <p>Kontaktiere mich noch heute, um weitere Informationen zu erhalten oder
        ein persönliches Beratungsgespräch zu vereinbaren.</p>
      <p>Lass uns gemeinsam;
        deine Produkte ins Rampenlicht rücken!</p>

      <img src={LazyImage} className={css.produktfotografin}/>
      <p className={css.title}>Meine Zertifikate</p>

      <img src={certificateImage} className={css.produktfotografin}/>

      {/*<div className={css.imgWrap}>*/}
      {/*  <img src={certificate2Image} className={css.produktfotografin}/>*/}
      {/*  <img src={certificate3Image} className={css.produktfotografin}/>*/}
      {/*</div>*/}
    </div>

  );
};

export default AboutMe;
