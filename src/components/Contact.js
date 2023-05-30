import Icons from './Icons';

const Contact = () => (
  <div className="contact-contaner">
    <img
      src="./Images/contact-bg.png"
      alt="#"
      className="contact-img-bg"
    />
    <div className="contact-content">
      <div className="contact-items">
        <div className="contact-header">
          <h3 className="contact-title">تواصل معنا</h3>
          <div>...</div>
        </div>
        <div className="contact-body">
          <Icons />
        </div>
      </div>
    </div>
  </div>
);

export default Contact;
