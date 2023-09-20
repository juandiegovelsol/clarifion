import "./footer.scss";
import lockwhite from "../../assets/lockwithe.svg";
const Footer = () => {
  return (
    <footer className="footer">
      <section className="footer__left">
        <p>Copyright (c) 2023</p>
        <a></a>
        <p className="footer__mail">Clarifionsupport@clarifion.com</p>
      </section>
      <section className="footer__rigth">
        <img src={lockwhite} alt="lockwhite" />
        <p>Secure 256-bit SSL encryption.</p>
      </section>
    </footer>
  );
};

export default Footer;
