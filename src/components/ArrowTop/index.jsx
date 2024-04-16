import ScrollArrow from '../../hook/useScrollTop';
import { ReactComponent as ArrowUpImage } from '../../assets/images/arrowUp.svg';
import css from './style.module.scss';

const ArrowTop = () => {
  const { scrollTop, showScroll } = ScrollArrow();
  return (
    <div className={css.scrollTop} onClick={scrollTop} style={{ display: showScroll ? 'flex' : 'none' }}>
      <ArrowUpImage width={25} height={25} />
    </div>
  );
};

export default ArrowTop;
