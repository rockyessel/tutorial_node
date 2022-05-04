import React, { useState, useEffect } from 'react';
import { FaSignInAlt } from 'react-icons/fa';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const { email, password } = formData;

  const onChange = (event) => {
    setFormData((previousState) => ({
      ...previousState,
      [event.target.name]: event.target.value,
    }));
  };

  const onSubmit = (event) => {
    event.preventDefault();

    const obj = { email, password };
    console.log(obj);
  };

  return (
    <div>
      <section className='heading'>
        <h1>
          <FaSignInAlt />
        </h1>{' '}
        Login
        <p>Please log in to your account</p>
      </section>
      <section className='form'>
        <form onSubmit={onSubmit}>
          <div className='form-group'>
            <input
              type='email'
              className='form-control'
              placeholder='Enter your email'
              name='email'
              value={email}
              onChange={onChange}
            />
          </div>
          <div className='form-group'>
            <input
              type='password'
              className='form-control'
              placeholder='Enter password'
              name='password'
              value={password}
              onChange={onChange}
            />
          </div>
          <div className='form-group'>
            <button type='submit' className='btn btn-block'>
              Submit
            </button>
          </div>
        </form>
      </section>
    </div>
  );
};

export default Login;
