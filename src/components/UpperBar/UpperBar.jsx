import "./upper-bar.scss";
import starbust from "../../assets/fluent_checkmark-starburst-20-regular.svg";
import sync from "../../assets/fluent_arrow-sync-checkmark-20-regular.svg";
import heart from "../../assets/mdi_cards-heart-outline.svg";
import truck from "../../assets/ph_truck-light.svg";
import arrow from "../../assets/Layer_1.svg";

const content = [
  {
    image: starbust,
    text: "30-DAY SATISFACTION GUARANTEE",
  },
  {
    image: truck,
    text: "FREE DELIVERY ON ORDERS OVER $40.00",
  },
  {
    image: heart,
    text: "50.000+ HAPPY CUSTOMERS",
  },
  {
    image: sync,
    text: "100% MONEY BACK GUARANTEE",
  },
];

const UpperBar = () => {
  return (
    <header className="upper-bar">
      <img src={arrow} className="upper-bar__arrow" alt="arrow" />

      {content.length &&
        content.map(({ image, text }) => (
          <section key={text} className="upper-bar__section">
            <img
              src={image}
              alt="section"
              className="upper-bar__section-image"
            />
            <p className="upper-bar__section-text">{text}</p>
          </section>
        ))}

      <img src={arrow} className="upper-bar__arrow" alt="arrow" />
    </header>
  );
};

export default UpperBar;
