import React from 'react'
import styled from 'styled-components'
import { useForm, ValidationError } from '@formspree/react';
import { useNavigate } from 'react-router-dom';

// Make sure to run npm install @formspree/react
// For more help visit https://formspr.ee/react-help

const Contact = () => {
  // formspree setup
  const [state, handleSubmit] = useForm("xqkvvaen");
  if (state.succeeded) {
    return (
      <p>Thanks for subscribing</p>
    )
  }
  return (
    <Wrapper>
      <div className='section-center'>
        <h3>Join our newsletter and get 20% off</h3>
        <div className='content'>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, 
            sed do eiusmod tempor incididunt ut labore et dolore magna 
            aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco 
            laboris nisi ut aliquip ex ea commodo consequat. 
          </p>
          <form className='contact-form' onSubmit={handleSubmit}>
            <input 
              type='email' 
              className='form-input' 
              placeholder='enter email'
              id='email'
              name='email'
            />
            <ValidationError 
              prefix='Email'
              field='email'
              errors={state.errors}
            />
            <button type='submit' className='submit-btn'
              disabled={state.submitting}
            >
              subscribe
            </button>
          </form>
        </div>
      </div>
    </Wrapper>
  )
}
const Wrapper = styled.section`
  padding: 5rem 0;
  h3 {
    text-transform: none;
  }
  p {
    line-height: 2;
    max-width: 45em;
    color: var(--clr-grey-5);
  }
  .contact-form {
    width: 90vw;
    max-width: 500px;
    display: grid;
    grid-template-columns: 1fr auto;
  }

  .form-input,
  .submit-btn {
    font-size: 1rem;
    padding: 0.5rem 1rem;
    border: 2px solid var(--clr-black);
  }
  .form-input {
    border-right: none;
    color: var(--clr-grey-3);
    border-top-left-radius: var(--radius);
    border-bottom-left-radius: var(--radius);
  }
  .submit-btn {
    border-top-right-radius: var(--radius);
    border-bottom-right-radius: var(--radius);
  }
  .form-input::placeholder {
    color: var(--clr-black);
    text-transform: capitalize;
  }
  .submit-btn {
    background: var(--clr-primary-5);
    text-transform: capitalize;
    letter-spacing: var(--spacing);
    cursor: pointer;
    transition: var(--transition);
    color: var(--clr-black);
  }
  .submit-btn:hover {
    color: var(--clr-white);
  }
  @media (min-width: 992px) {
    .content {
      display: grid;
      grid-template-columns: 1fr 1fr;
      align-items: center;
      gap: 8rem;
      margin-top: 2rem;
    }
    p {
      margin-bottom: 0;
    }
  }
  @media (min-width: 1280px) {
    padding: 15rem 0;
  }
`

export default Contact
