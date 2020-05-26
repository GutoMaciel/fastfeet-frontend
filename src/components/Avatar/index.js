import React from 'react';
// import { useSelector } from 'react-redux';

import { Container } from './styles';

export default function Avatar() {
  // const profile = useSelector(state => state.user.profile);

  return (
    <Container>
      <img src="https://api.adorable.io/avatars/50/abott@adorable.png" alt="" />
    </Container>
  );
}
