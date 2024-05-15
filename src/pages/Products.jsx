import ContactForm from "../components/ContactForm";
import FAQ from "../components/FAQ";
import css from "../styles/modules/shared.module.scss";
import formImage from '../assets/images/photo_1.jpg';


const Products = () => {
  return <>
    <FAQ />
    <ContactForm img={formImage} title={<>Interesse? <br /> Lass loslegen</>} />
    <h2 className={css.supTitle}>Als Produktfotografin in Hamburg bin ich bestrebt, Deinen Anforderungen gerecht
      zu werden und Deine Erwartungen zu übertreffen. Egal, ob Du einzelne Produkte oder ganze
      Produktlinien hast, ich stehe Dir zur Verfügung, um Deine Vision zum Leben zu erwecken.</h2>
  </>;
};

export default Products;
