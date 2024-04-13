import { Link } from "react-router-dom";
import LogoImage from '../../assets/images/logo.jpg'
import styles from './style.module.scss'

const Index = () => {
  return (
    <div className={styles.header}>
      <Link>
        <img width={50} height={50} src={LogoImage} alt="logo" />
       </Link>

    </div>
  );
};

export default Index;
