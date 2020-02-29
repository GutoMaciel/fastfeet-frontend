import React from 'react';
import { useDispatch } from 'react-redux';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';

import { signInRequest } from '~/store/modules/auth/actions';

import logo from '~/assets/logo.png';

const schema = Yup.object().shape({
  email: Yup.string()
    .email('Sign with a valid email')
    .required('Email required'),
  password: Yup.string().required('Password required'),
});

export default function SignIn() {
  const dispatch = useDispatch();

  function handleSubmit({ email, password }) {
    dispatch(signInRequest(email, password));
  }

  return (
    <>
      <img src={logo} alt="FastFeet" />

      <Form schema={schema} onSubmit={handleSubmit}>
        <strong>YOUR EMAIL</strong>
        <Input name="email" type="email" placeholder="Email" />
        <strong>YOUR PASSWORD</strong>
        <Input name="password" type="password" placeholder="Password" />

        <button type="submit">Sign In</button>
      </Form>
    </>
  );
}
