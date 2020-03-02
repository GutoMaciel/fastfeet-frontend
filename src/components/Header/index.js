import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import logo from '~/assets/logo.png';

import { signOut } from '~/store/modules/auth/actions';

import { Container, Content, Profile } from './styles';

export default function Header() {
  const dispatch = useDispatch();

  function handleSignOut() {
    dispatch(signOut());
  }
  return (
    <Container>
      <Content>
        <nav>
          <img src={logo} alt="FastFeet" />
          <Link to="/packs">PACKS</Link>
          <Link to="/deliverymans">DELIVERYMANS</Link>
          <Link to="/recipients">RECIPIENTS</Link>
          <Link to="/problems">PROBLEMS</Link>
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
