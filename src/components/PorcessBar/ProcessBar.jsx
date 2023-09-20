import "./process-bar.scss";
import check from "../../assets/tick-circle.svg";
import green from "../../assets/Ellipse47.svg";
import blue from "../../assets/Ellipse48.svg";
import blue_empty from "../../assets/Ellipse49.svg";

const content = [
  {
    step: 1,
    status: "fullfiled",
    text: "Cart Review",
  },
  {
    step: 2,
    status: "fullfiled",
    text: "Checkout",
  },
  {
    step: 3,
    status: "progress",
    text: "Special Offer",
  },
  {
    step: 4,
    status: "pending",
    text: "Confirmation",
  },
];

const ProcessBar = () => {
  return (
    <section className="process-bar">
      {content.length &&
        content.map(({ step, status, text }) => (
          <article key={text} className="process-bar__step">
            {status === "fullfiled" ? (
              <>
                <span className="process-bar__image">
                  <img src={green} alt="checked" />
                  <img
                    src={check}
                    alt="checked"
                    className="process-bar__check"
                  />
                </span>
                <p className="process-bar__text">
                  <span>Step {step}:</span> {text}
                </p>
              </>
            ) : status === "progress" ? (
              <>
                <span className="process-bar__image">
                  <img src={blue} alt="checked" />
                  <p className="process-bar__number process-bar__white">
                    {step}
                  </p>
                </span>
                <p className="process-bar__text process-bar__text-bold">
                  <span>Step {step}:</span> {text}
                </p>
              </>
            ) : (
              <>
                <span className="process-bar__image">
                  <img src={blue_empty} alt="checked" />
                  <p className="process-bar__number  process-bar__blue">
                    {step}
                  </p>
                </span>
                <p className="process-bar__text">
                  <span>Step {step}:</span> {text}
                </p>
              </>
            )}
          </article>
        ))}
    </section>
  );
};

export default ProcessBar;
