import React, { useState } from 'react';
import Icons from './Icons';

const Contact = () => {
  const [isSent, setIsSent] = useState(false);
  const [data, setData] = useState({
    fname: '',
    email: '',
    message: '',
  });

  const handelSubmit = (e) => {
    e.preventDefault();
    if (data.fname && data.email && data.message) {
      fetch('https://formspree.io/f/mqknlobw', {
        method: 'POST',
        body: JSON.stringify({ data }),
        headers: { 'Content-Type': 'application/json' },
      })
        .then((res) => res.json())
        .catch((error) => console.log(error)); // eslint-disable-line
    }

    setTimeout(() => {
      setData({
        fname: '',
        email: '',
        message: '',
      });
      setIsSent((isSent) => !isSent);
    }, 1500);
  };

  return (
    <div
      id="contact"
      className="contact-contaner"
    >
      <div className="contact-content">
        <div className="contact-items">
          <div className="contact-header">
            <h1 className="contact-title">
              تواصل معنا
              <div className="line" />
            </h1>
          </div>
          <div className="contact-details">
            <form
              onSubmit={handelSubmit}
              className=" form gap-3 d-flex flex-column"
              action="https://formspree.io/f/mqknlobw "
              method="post"
            >
              <div className="col-auto">
                <label
                  htmlFor="fname"
                  className="visually-idden d-flex flex-row"
                >
                  <input
                    type="text"
                    className="form-control"
                    id="fname"
                    name="fname"
                    placeholder="الاسم الكامل"
                    maxLength="30"
                    value={data.fname}
                    onChange={(e) => setData({ ...data, fname: e.target.value })}
                    required
                  />
                </label>
              </div>
              <div className="col-auto">
                <label
                  htmlFor="email"
                  className="visually-idden d-flex flex-row"
                >
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    name="email"
                    placeholder="email@gmail.com"
                    value={data.email}
                    onChange={(e) => setData({ ...data, email: e.target.value })}
                    required
                  />
                </label>
              </div>
              <div className="col-auto">
                <label
                  htmlFor="message"
                  className="visually-idden d-flex flex-row"
                >
                  <textarea
                    type="text"
                    rows={5}
                    className="form-control"
                    id="message"
                    name="message"
                    placeholder="اكتب رسالتك هنا ..."
                    maxLength="350"
                    value={data.message}
                    onChange={(e) => setData({ ...data, message: e.target.value })}
                    required
                  />
                </label>
              </div>
              <div className="col-auto">
                <button
                  type="submit"
                  className={isSent ? 'mail-btn fly' : 'mail-btn'}
                >
                  Send
                </button>
              </div>
            </form>
            <div className="contact-body">
              <Icons />
            </div>
          </div>
        </div>
      </div>
      <foot>
        <img
          src="./assets/contact-bg.WebP"
          alt="contact_img"
          className="contact-img-bg"
        />
      </foot>
    </div>
  );
};
export default Contact;
