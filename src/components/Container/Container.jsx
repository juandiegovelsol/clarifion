import "./container.scss";
import product from "../../assets/product_image.png";
import user from "../../assets/user_photo.png";
import stars from "../../assets/Stars.svg";
import verify from "../../assets/verify.svg";

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
      <aside className="container__rigth"></aside>
    </section>
  );
};

export default Container;
