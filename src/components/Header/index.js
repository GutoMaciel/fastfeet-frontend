import React from 'react';
// import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import logo from '~/assets/logo.png';

// import { signOut } from '~/store/modules/auth/actions';

import { Container, Content, Profile } from './styles';

export default function Header() {
  function handleSignOut() {
    // dispatch(signOut());
  }
  return (
    <Container>
      <Content>
        <nav>
          <img src={logo} alt="FastFeet" />
          <Link to="/packages">PACKS</Link>
          <Link to="/deliveryman">DELIVERYMANS</Link>
          <Link to="/recipients">RECIPIENTS</Link>
          <Link to="/deliveryproblems">PROBLEMS</Link>
        </nav>
        <aside>
          <Profile>
            <div>
              <strong>Admin</strong>
              <button type="button" onClick={handleSignOut}>
                Logout
              </button>
            </div>
          </Profile>
        </aside>
      </Content>
    </Container>
  );
}
