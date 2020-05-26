import styled from 'styled-components';

export const Menu = styled.div`
  position: absolute;
  width: 130px !important;
  border-radius: 4px;
  display: flex;
  padding: 10px 15px;
  flex-direction: column;
  background-color: white;
`;

export const MenuItem = styled.div`
  display: flex;
  align-items: center;
  padding: 10px 0px;
  width: 100%;
  /* border-bottom: 1px solid; */
  &:first-child {
    padding-top: 0;
    padding-bottom: 10;
  }
  &:last-child {
    padding-top: 10;
    padding-bottom: 0;
    border-bottom: none;
  }
  svg {
    margin-right: 5px;
    color: ${props => props.iconColor};
    &:hover {
      color: ${props => props.iconColor} !important;
    }
  }
  a {
    color: #111;
  }
  span {
    color: #6159c1;
    font-size: 16px;
  }
`;
