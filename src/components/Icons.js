import { FaMapMarkerAlt } from 'react-icons/fa';
// import { MdEmail } from 'react-icons/md';
import { IoLogoWhatsapp } from 'react-icons/io';

const Icons = () => (
  <div className="icons-container">
    <div className="icon map">
      <a
        href="https://goo.gl/maps/oQTvNrrpxDSM5us99"
        target="_blank"
        rel="noreferrer"
      >
        <FaMapMarkerAlt className="icon-logo map-logo" />
        <span>المملكة العربية السعودية, جدة, حي المحمدية, شارع زيد الأنصاري</span>
      </a>
    </div>
    <div className="icon whatsapp">
      <a
        aria-label="Chat on WhatsApp"
        href="https://wa.me/966593084741"
        target="_blank"
        rel="noreferrer"
      >
        <IoLogoWhatsapp className="icon-logo whatsapp-logo" />
        <span>+966593084741</span>
      </a>
      - للتواصل عبر الواتساب
    </div>
  </div>
);

export default Icons;
