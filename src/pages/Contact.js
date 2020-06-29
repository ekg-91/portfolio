import React, { useState } from 'react';
import axios from 'axios';
import { useForm } from 'react-hook-form/dist/react-hook-form.ie11';

export default function Contact(props) {
  // STATE
  const [state, setState] = useState({
    name: '',
    email: '',
    message: '',
    disabled: false,
    emailSent: null,
  });

  const { register, handleSubmit } = useForm();

  // METHODS
  const onSubmit = (data) => {
    setState({
      disabled: true,
    });

    axios
      .post(
        'https://api.formik.com/submit/ekgportfolio/contact-form',
        JSON.stringify(data),
        { headers: { 'Content-Type': 'application/json' } }
      )
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
          error: err,
        });
      });
  };

  // RENDER
  return (
    <div className="contact">
      <div className="contact__heading">
        <h1 className="heading-primary--sub">Contact Me</h1>
      </div>

      <div className="contact__form-box">
        <form
          action="post"
          className="form"
          id="contact-form"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="form__group form__group--credentials">
            <div className="form__subgroup">
              <label htmlFor="name" className="form__label">
                Full Name
              </label>
              <input
                type="text"
                className="form__input"
                id="name"
                name="name"
                placeholder="Full Name"
                disabled={state.disabled}
                ref={register}
                required
              />
            </div>

            <div className="form__subgroup">
              <label htmlFor="email" className="form__label">
                Email Address
              </label>
              <input
                type="email"
                className="form__input"
                id="email"
                name="email"
                placeholder="Email Address"
                disabled={state.disabled}
                ref={register}
                required
              />
            </div>

            <div className="form__subgroup">
              <label htmlFor="phone" className="form__label">
                Phone Number
              </label>
              <input
                type="phone"
                className="form__input"
                id="phone"
                name="phone"
                placeholder="Phone Number"
                disabled={state.disabled}
                ref={register}
              />
            </div>
          </div>

          <div className="form__group form__group--message">
            <label htmlFor="message" className="form__label">
              Message
            </label>
            <textarea
              type="text"
              className="form__input form__input--message"
              id="message"
              name="message"
              placeholder="Message"
              disabled={state.disabled}
              ref={register}
              required
            />
          </div>

          <div className="form__group">
            <input
              type="submit"
              value="Send Message"
              className="form__submit"
            />
          </div>
        </form>
      </div>
    </div>
  );
}
