import "./title.scss";
import clarifion from "../../assets/600a41c73b670a97ae1d4f47_Clarifion_Logo1.png";
import mcaffee from "../../assets/Frame1484578055.svg";
import norton from "../../assets/norton-antivirus-logo1.svg";
const Title = () => {
  return (
    <section className="title">
      <article className="title__left">
        <img src={clarifion} alt="logo" className="title__image" />
      </article>
      <article className="title__rigth">
        <img src={mcaffee} alt="logo" className="title__image" />
        <img src={norton} alt="logo" className="title__image" />
      </article>
    </section>
  );
};

export default Title;
