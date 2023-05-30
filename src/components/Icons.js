import { FaWhatsapp, FaMapMarkerAlt } from 'react-icons/fa';
import { AiOutlineMail } from 'react-icons/ai';

const Icons = () => (
  <div className="icons">
    <div>
      <a
        aria-label="Chat on WhatsApp"
        href="https://wa.me/966593084741"
        target="_blank"
        rel="noreferrer"
      >
        <FaWhatsapp className="icon" />
        <span>+966593084741</span>
      </a>
    </div>
    <div>
      <a
        aria-label="Send an Email"
        href="mailto:info@tasaraa.com"
        target="_blank"
        rel="noreferrer"
      >
        <AiOutlineMail className="icon" />
        <span>info@tasaraa.com</span>
      </a>
    </div>
    <div>
      <a
        href="https://goo.gl/maps/oQTvNrrpxDSM5us99"
        target="_blank"
        rel="noreferrer"
      >
        <FaMapMarkerAlt className="icon" />
        <span>جدة, حي المحمدية, شارع زيد الأنصاري</span>
      </a>
    </div>
  </div>
);

export default Icons;
