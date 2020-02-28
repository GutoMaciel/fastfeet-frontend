import React from 'react';

import logo from '~/assets/logo.png';

export default function SignIn() {
  return (
    <>
      <img src={logo} alt="FastFeet" />

      <form>
        <strong>YOUR EMAIL</strong>
        <input type="email" placeholder="Email" />
        <strong>YOUR PASSWORD</strong>
        <input type="password" placeholder="Password" />

        <button type="submit">Sign In</button>
      </form>
    </>
  );
}
