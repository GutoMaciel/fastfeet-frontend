import styled from 'styled-components';

export const Container = styled.div`
  margin: auto 0 !important;

  background: none;
  border: 0;
  position: relative;
`;

export const OptionsList = styled.div`
  position: absolute;
  width: 150px;
  left: calc(50% - 85px);
  top: calc(100% + 1px);
  background: #fff;
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.1);
  border-radius: 4px 0 4px 4px;
  padding: 15px 5px;
  margin-bottom: 0 !important;

  z-index: 10;

  display: ${props => (props.visible ? 'block' : 'none')};
`;
