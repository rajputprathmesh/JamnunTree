import { FaInstagram, FaWhatsapp, FaFacebook } from "react-icons/fa";

const SocialIcons = () => {
  return (
    <div className="social-container">
      <a href="https://www.instagram.com/jaamuntree/" target="_blank" rel="noreferrer" className="icon instagram">
        <FaInstagram />
      </a>

      <a href="https://wa.me/917947420577" target="_blank" rel="noreferrer" className="icon whatsapp">
        <FaWhatsapp />
      </a>

      <a href="#" target="_blank" rel="noreferrer" className="icon facebook">
        <FaFacebook />
      </a>
    </div>
  );
};

export default SocialIcons;
