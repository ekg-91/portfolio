import React, { useState } from 'react';
import axios from 'axios';

export default function Contact(props) {
  const [state, setState] = useState({
    name: '',
    email: '',
    message: '',
    disabled: false,
    emailSent: null,
  });

  const handleChange = (event) => {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    setState({
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    setState({
      disabled: true,
    });

    axios
      .post('http://localhost:3030/api/email', state)
      .then((res) => {
        if (res.data.success) {
          setState({
            disabled: false,
            emailSent: true,
          });
        } else {
          setState({
            disabled: false,
            emailSent: false,
          });
        }
      })
      .catch((err) => {
        setState({
          disabled: false,
          emailSent: false,
        });
      });
  };

  return (
    <div className="contact">
      <div className="contact__heading">
        <h1 className="heading-primary--sub">Contact me</h1>
      </div>

      <div className="contact__form-box">
        <form action="post" className="form" id="contact-form">
          <div className="form__group">
            <label htmlFor="name" className="form__label">Full Name</label>
            <input type="text" className="form__input" id="name" placeholder="Full Name" required />
          </div>

          <div className="form__group">
            <label htmlFor="email" className="form__label">Email Address</label>
            <input type="email" className="form__input" id="email" placeholder="Email Address" required />
          </div>

          <div className="form__group">
            <label htmlFor="phone" className="form__label">Phone Number</label>
            <input type="phone" className="form__input" id="phone" placeholder="Phone Number" />
          </div>

          <div className="form__group form__group--message">
            <label htmlFor="message" className="form__label">Message</label>
            <textarea type="text" className="form__input form__input--message" id="message" placeholder="Message" required />
          </div>

          <div className="form__group">
            <input type="submit" value="Send Message" className="form__submit" />
          </div>
        </form>
      </div>
    </div>
  );
}
