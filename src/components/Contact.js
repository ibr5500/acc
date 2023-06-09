import Icons from './Icons';

const Contact = () => (
  <div
    id="contact"
    className="contact-contaner"
  >
    <div className="contact-content">
      <div className="contact-items">
        <div className="contact-header">
          <h3 className="contact-title">
            تواصل معنا
            <div className="line" />
          </h3>
        </div>
        <div className="contact-body">
          <Icons />
        </div>
      </div>
    </div>
    <foot>
      <img
        src="./assets/contact-bg.png"
        alt="#"
        className="contact-img-bg"
      />
    </foot>
  </div>
);

export default Contact;
