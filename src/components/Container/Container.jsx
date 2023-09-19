import "./container.scss";
import product from "../../assets/product_image.png";
import user from "../../assets/user_photo.png";
import stars from "../../assets/Stars.svg";
import verify from "../../assets/verify.svg";
import bluetick from "../../assets/bluetick.svg";
import guarantee from "../../assets/guarantee.png";

const Container = () => {
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
        <div className="container__rigth-article"></div>
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
        <div className="container__rigth-discount"></div>
        <div className="container__rigth-getdiscount"></div>
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
