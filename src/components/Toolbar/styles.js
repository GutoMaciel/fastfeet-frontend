import styled from 'styled-components';

export const Container = styled.div`
  div {
    max-width: 1200px;
    margin: 40px auto 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  span {
    font-size: 24px;
    font-weight: bold;
  }

  aside {
    display: flex;

    a.prevPage {
      background: #c4c4c4;
    }
  }

  a {
    display: flex;
    align-items: center;
    font-weight: bold;
    border-radius: 4px;
    padding: 10px 15px;
    background: #7d40e7;
    color: #fff;
    border: none;
  }

  button {
    display: flex;
    align-items: center;
    font-weight: bold;
    margin-left: 10px;
    border-radius: 4px;
    padding: 10px 15px;
    background: #7d40e7;
    color: #fff;
    border: none;
  }

  p {
    font-weight: bold;
    align-items: center;
    display: flex;
    padding: 10px 15px;
  }
`;
