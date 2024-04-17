import Button from '../components/Button';
import css from '../styles/notFound.module.scss';

const NotFoundPage = () => {
  return (
    <div className={css.wrapper}>
      <h1>Seite nicht gefunden</h1>
      <p className={css.text}>
        Entschuldigung, es&nbsp;gibt keine solche Seite.
        <br />
        Aber wir haben viele andere interessante Seiten!
      </p>

      <Button to={'/'} className={'btn button'} title="Zurück zur Startseite" />
    </div>
  );
};

export default NotFoundPage;
