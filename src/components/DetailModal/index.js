import React from 'react';
import PropTypes from 'prop-types';

import { Container, OptionsList } from './styles';

export default function DetailModal({ children }) {
  return (
    <Container>
      <OptionsList>{children}</OptionsList>
    </Container>
  );
}

DetailModal.propTypes = {
  children: PropTypes.element.isRequired,
};
