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
          <Item
            key={'item_1'}
            original={`${Image_4}`}
            thumbnail={`${Image_4}`}
            width="550"
            height="550"
          >
            {({ ref, open }) => <img ref={ref}  width="550"  height="550" onClick={open} src={Image_4} />}
          </Item>
        </div>

        <div className={`${css.galleryItem} ${css.galleryItemBig}`}>
          <Item key={'item_2'} original={`${Image_5}`} thumbnail={`${Image_5}`} width="640" height="579">
            {({ ref, open }) => <img ref={ref} width="640" height="579" onClick={open} src={Image_5} />}
          </Item>
        </div>

        <div className={css.galleryItem}>
          <Item key={'item_3'} original={`${Image_2}`} thumbnail={`${Image_2}`} width="480" height="571">
            {({ ref, open }) => <img ref={ref} width="480" height="571" onClick={open} src={Image_2} />}
          </Item>
        </div>

        <div className={css.galleryItem}>
          <Item key={'item_4'} original={`${Image_1}`} thumbnail={`${Image_1}`} width="550" height="550">
            {({ ref, open }) => <img ref={ref} onClick={open} src={Image_1} width="550" height="550"/>}
          </Item>
        </div>

        <div className={css.galleryItem}>
          <Item key={'item_5'} original={`${Image_3}`} thumbnail={`${Image_3}`} width="570" height="565">
            {({ ref, open }) => <img ref={ref} onClick={open} src={Image_3}  width="570" height="565" />}
          </Item>
        </div>
      </Gallery>
    </div>
  );
};

export default MyGallery;
