import Icons from './Icons';

const Contact = () => (
  <div className="contact-contaner">
    <div className="contact-content">
      <div className="contact-items">
        <div className="contact-header">
          <h3 className="contact-title">
            تواصل معنا
            {' '}
            <br />
            {' '}
            <div className="line" />
          </h3>
          {/* <div className="line" /> */}
        </div>
        <div className="contact-body">
          <Icons />
        </div>
      </div>
    </div>
    <img
      src="./Images/contact-bg.png"
      alt="#"
      className="contact-img-bg"
    />
  </div>
);

export default Contact;
