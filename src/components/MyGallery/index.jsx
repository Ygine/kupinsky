import 'photoswipe/dist/photoswipe.css';

import { Gallery, Item } from 'react-photoswipe-gallery';
import css from './style.module.scss';

import Image_1 from '../../assets/images/galery_1.png';
import Image_2 from '../../assets/images/galery_2.jpg';
import Image_3 from '../../assets/images/galery_3.jpg';
import Image_4 from '../../assets/images/galery_4.jpg';
import Image_5 from '../../assets/images/galery_5.jpg';

const MyGallery = () => {
  return (
    <div className={css.gallery}>
      <Gallery>
        <div className={`${css.galleryItem} ${css.galleryItemBig}`}>
          <Item original={`${Image_4}`} thumbnail={`${Image_4}`} width="750" height="892">
            {({ ref, open }) => <img ref={ref} onClick={open} src={Image_4} />}
          </Item>
        </div>

        <div className={`${css.galleryItem} ${css.galleryItemBig}`}>
          <Item original={`${Image_5}`} thumbnail={`${Image_5}`} width="750" height="892">
            {({ ref, open }) => <img ref={ref} onClick={open} src={Image_5} />}
          </Item>
        </div>

        <div className={css.galleryItem}>
          <Item original={`${Image_2}`} thumbnail={`${Image_2}`} width="750" height="892">
            {({ ref, open }) => <img ref={ref} onClick={open} src={Image_2} />}
          </Item>
        </div>

        <div className={css.galleryItem}>
          <Item original={`${Image_1}`} thumbnail={`${Image_1}`} width="880" height="880">
            {({ ref, open }) => <img ref={ref} onClick={open} src={Image_1} />}
          </Item>
        </div>

        <div className={css.galleryItem}>
          <Item original={`${Image_3}`} thumbnail={`${Image_3}`} width="750" height="892">
            {({ ref, open }) => <img ref={ref} onClick={open} src={Image_3} />}
          </Item>
        </div>
      </Gallery>
    </div>
  );
};

export default MyGallery;
