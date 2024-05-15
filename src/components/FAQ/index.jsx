import FaqData from '../../data/faq';
import Container from '../Shared/Container';
import css from './style.module.scss'

const FAQ = () => {
  const toggleFAQ = (e) => {
    if (e.target.nodeName === "UL") return;
    const faqElem = e.target.closest('li');
    const activeElem = document.querySelector(`li.${css.open}`);

    if (activeElem && activeElem !== faqElem) {
      activeElem.classList.remove(css.open);
      faqElem.classList.add(css.open);
    } else if(activeElem) {
      activeElem.classList.remove(css.open)
    } else {
      faqElem.classList.add(css.open);
    }
  };

  const parseFAQData = (faq, index) => {
    return (
      <li
        className={css.faq}
        key={index}
        onClick={(e) => toggleFAQ(e)}
      >
        <div className={css.faqQuestion}>{faq.question}</div>
        {Array.isArray(faq.answer) ? (
            faq.answer.map((item, index) => <p key={item} className={css.faqAnswer}>{index + 1}. {item}</p>)) :
          <p className={css.faqAnswer}>{faq.answer}</p>
        }

      </li>
    );
  };

  return (
    <Container>
      <div className={css.faqSection}>
        <div>
          <p className={''}>FAQ</p>
          <h2>ALLES WAS DU ÜBER ZUSAMMENARBEIT MIT MIR WISSEN MUSST</h2>
        </div>
        <ul>
          {FaqData.map((faq, index) => parseFAQData(faq, index))}
        </ul>
      </div>
    </Container>

  );
};

export default FAQ;
