import css from './style.module.scss';

const SupportContent = () => {
  return (
    <div className={css.trigger}>
      <h3> Alisa </h3>
      <p>Produktfotografin</p>
      <a className={css.tel} href="tel:+4915786606437">
        +4915786606437
      </a>
      <div className={css.email}>
        <a href="mailto:daria-medved@gmx.de">daria-medved@gmx.de</a>
      </div>

      <div className={''}>
        <a className={''} href="https://wa.me/4917643434047" target="_blank" title="WhatsApp">
          WhatsApp
        </a>
        <a rel="nofollow" href="/card/4Z9WyaeE/de.vcf">
          Kontakt speichern
        </a>
      </div>
    </div>
  );
};

export default SupportContent;
