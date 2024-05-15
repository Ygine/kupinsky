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

      <img src={LazyImage} alt={''} className={css.produktfotografin}/>
      <p className={css.title}>Meine Zertifikate</p>

      <img src={certificateImage} alt={''} className={css.produktfotografin}/>

      <div className={css.imgWrap}>
        <img src={certificate2Image} alt={''} className={css.produktfotografin}/>
        <img src={certificate3Image} alt={''} className={css.produktfotografin}/>
      </div>

      <div className={css.textWrap}>
        <h2>Produktfotograf gesucht?</h2>
        <div>
          <p>Suchst Du nach einem erfahrenen Produktfotografen, der Deine Produkte optimal in Szene setzt? Dein
            Streben nach professionellen Bildern, die potenzielle Kunden ansprechen und Deine Verkäufe steigern, endet
            hier.</p>
          <p>Als erfahrenere Produktfotografin biete ich maßgeschneiderte Lösungen für Deine fotografischen
            Anforderungen.
            Egal, ob es sich um E-Commerce, Amazon-Listings oder Werbematerialien handelt, meine
            Leidenschaft und Expertise für die Produktfotografie wird Deine Produkte ins Rampenlicht rücken. Mit einem
            Auge für Details und einem Fokus auf Qualität arbeite ich eng mit Dir zusammen, um Deine Vision zum Leben
            zu erwecken. </p>
        </div>
      </div>

      <div className={css.textWrap}>
        <h2>Produktfotografie in Hamburg</h2>
        <div>
          <p>Ein professionelles Produktfoto oder ein Packshot, erstellt von einem erfahrenen Produktfotografen, hat die
            Fähigkeit, den Umsatz deines Unternehmens zu steigern und eine breitere Zielgruppe anzusprechen. Meine
            Produktfotos zeichnen sich durch <b>hohe Auflösung, individuelle Nachbearbeitung, gezielte
              Zielgruppenansprache und die Betonung der wichtigsten Details</b> aus. Ich schaffe hochwertigen
            Produktfotografie Momente, die deine Kunden in den Bann ziehen und die Kaufentscheidung bereits
            in den ersten Sekunden beeinflussen werden.</p>
          <p>Die Dienstleistungen von Daria Medved bieten ein hervorragendes Preis-Leistungs-Verhältnis. Statt sich
            selbst
            in der Produktfotografie zu versuchen, überlass diese Herausforderung lieber einem professionellen
            Produktfotografen. Lass uns wirkungsvolle Produktfotos, Produktaufnahmen, Packshots und mehr erstellen, die
            perfekt zu deinen Vorstellungen passen.</p>
        </div>
      </div>
    </div>

  );
};

export default AboutMe;
