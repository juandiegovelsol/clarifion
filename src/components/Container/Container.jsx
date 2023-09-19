import "./container.scss";
import product from "../../assets/product_image.png";
import user from "../../assets/user_photo.png";
import stars from "../../assets/Stars.svg";
import verify from "../../assets/verify.svg";
import bluetick from "../../assets/bluetick.svg";
import guarantee from "../../assets/guarantee.png";
import product_resume from "../../assets/product_resume.png";
import star from "../../assets/star.svg";
import selector from "../../assets/selector.svg";
import discount from "../../assets/discount.svg";
import buttonarrow from "../../assets/buttonarrow.svg";
import visa from "../../assets/visa.svg";
import shoppay from "../../assets/shoppay.svg";
import paypal from "../../assets/paypal.svg";
import mastercard from "../../assets/mastercard.svg";
import gpay from "../../assets/gpay.svg";
import applepay from "../../assets/applepay.svg";
import amex from "../../assets/amex.svg";
import lock from "../../assets/lock.svg";

const Container = () => {
  const n = 5;
  const payment = [visa, shoppay, paypal, mastercard, gpay, applepay, amex];

  return (
    <section className="container">
      <aside className="container__left">
        <img src={product} alt="product" className="container__product-image" />
        <span className="container__comments">
          <div className="container__user">
            <div className="container__user-photo">
              <img src={user} alt="user" />
            </div>
            <div className="container__user-stars">
              <img src={stars} alt="stars" />
            </div>
            <div className="container__user-info">
              <p className="para">Ken T.</p>
              <img src={verify} alt="check" />
              <p className="text">Verified Costumer</p>
            </div>
          </div>
          <div className="container__text">
            “As soon as the Clarifions arrived I put one in my bedroom. This was
            late in the afternoon. When I went to the bedroom in the evening it
            smelled clean. When I went to bed I felt I could breathe better.
            Wonderful.”
          </div>
        </span>
      </aside>
      <aside className="container__rigth">
        <div className="container__rigth-title">
          <span className="container__rigth-blue">ONE TIME ONLY</span> special
          price for 6 extra Clarifion for only{" "}
          <span className="container__rigth-blue">$14 each</span> ($84.00
          total!)
        </div>
        <div className="container__rigth-article">
          <div className="container__rigth-img">
            <img src={product_resume} alt="product_resume" />
          </div>
          <div className="container__rigth-imginfo">
            <div className="container__rigth-price">
              <div className="subtitle">Clarifion Air Ionizer</div>
              <div className="price">
                <div className="prev">$180</div>
                <div className="post">$84</div>
              </div>
            </div>
            <div className="container__rigth-stars">
              {[...Array(n)].map((e, i) => (
                <img src={star} alt="star" key={i} />
              ))}
            </div>
            <div className="container__rigth-stock">
              <img src={selector} alt="selector" />
              <p>12 left in Stock</p>
            </div>
            <p className="container__rigth-description">
              Simply plug a Clarifion into any standard outlet and replace
              bulky, expensive air purifiers with a simple.
            </p>
          </div>
        </div>
        <div className="container__rigth-feature">
          <div className="container__rigth-featurebox">
            <img src={bluetick} alt="bluetick" />
            <p>
              Negative Ion Technology may <span>help with allergens</span>
            </p>
          </div>
          <div className="container__rigth-featurebox">
            <img src={bluetick} alt="bluetick" />
            <p>
              Designed for <span>air rejuvenation</span>
            </p>
          </div>
          <div className="container__rigth-featurebox">
            <img src={bluetick} alt="bluetick" />
            <p>
              <span> Perfect for every room </span> in all types of places.
            </p>
          </div>
        </div>
        <div className="container__rigth-discount">
          <img src={discount} alt="discount" />
          <p>
            Save <span>53%</span> and get <span>6 extra Clarifision</span> for
            only <span>$14 Each</span>.
          </p>
        </div>
        <div className="container__rigth-getdiscount">
          <button className="container__rigth-button">
            <p>Yes - Claim my discount</p>
            <img src={buttonarrow} alt="buttonarrow" />
          </button>
          <div className="container__rigth-payment">
            <p>Free shipping</p>
            <a></a>
            <span>
              <img src={lock} alt="lock" />
              <p>Secure 256-bit SSL encryption.</p>
            </span>
            <a></a>
            <div>
              {payment.length &&
                payment.map((e, i) => <img src={e} alt="payment" key={i} />)}
            </div>
          </div>
          <button className="container__rigth-cancel">
            No thanks, I don’t want this.
          </button>
        </div>
        <div className="container__rigth-guarantee">
          <img src={guarantee} alt="guarantee" />
          <p>
            If you are not completely thrilled with your Clarifion - We have a
            <span> 30 day satisfaction guarantee</span>. Please refer to our
            return policy at the bottom of the page for more details. <br />{" "}
            Happy Shopping!
          </p>
        </div>
      </aside>
    </section>
  );
};

export default Container;
