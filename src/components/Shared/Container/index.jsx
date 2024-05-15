import css from './style.module.scss'

function Container({children}) {
  return (
    <div className={css.container}>{children}</div>
  );
}

export default Container;
