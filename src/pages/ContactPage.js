import React, { useState } from 'react';
import axios from 'axios';

import Hero from '../components/Hero';
import Content from '../components/Content';

export default function ContactPage (props) {
  const [state, setState] = useState({
    name: '',
    email: '',
    message: '',
    disabled: false,
    emailSent: null
  })

  const handleChange = (event) => {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    setState({
      [name]: value
    })
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    setState({
      disabled: true
    });

    axios.post('http://localhost:3030/api/email', state)
      .then(res => {
        if(res.data.success){
          setState({
            disabled: false,
            emailSent: true
          });
        } else {
          setState({
            disabled: false,
            emailSent: false
          });
        }
      })
      .catch(err => {
        setState({
          disabled: false,
          emailSent: false
        })
      })
  }

  return (
    <div>
      <Hero title={props.title} />

      <Content>
        {/* <Form onSubmit={e => handleSubmit(e)}>
          <Form.Group>
            <Form.Label htmlFor='full-name'>Full Name</Form.Label>
            <Form.Control id='full-name' name='name' type='text' value={state.name} onChange={e => handleChange(e)}></Form.Control>
          </Form.Group>
          <Form.Group>
            <Form.Label htmlFor='email'>Email</Form.Label>
            <Form.Control id='email' name='email' type='email' value={state.email} onChange={e => handleChange(e)}></Form.Control>
          </Form.Group>
          <Form.Group>
            <Form.Label htmlFor='message'>Message</Form.Label>
            <Form.Control id='message' name='message' as='textarea' rows='3' value={state.message} onChange={e => handleChange(e)}></Form.Control>
          </Form.Group>
          <Button className='d-inline-block' variant='primary' type='submit' disabled={state.disabled}>
            Send
          </Button>

          {state.emailSent === true && <p className='d-inline success-msg'>Email Sent</p>}
          {state.emailSent === false && <p className='d-inline err-msg'>Email NOT Sent</p>}
        </Form> */}
      </Content>
    </div>
  );
}
