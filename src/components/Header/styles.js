import styled from 'styled-components';

export const Container = styled.div`
  background: #fff;
  padding: 0 30px;
`;

export const Content = styled.div`
  height: 64px;
  max-width: 900px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;

  nav {
    display: flex;
    align-items: center;
  }

  img {
    height: 20px;
    margin-right: 10px;
    padding-right: 20px;
    border-right: 1px solid #eee;
  }

  strong {
    margin-right: 20px;
    padding-right: 20px;
    color: #333;
    font-size: 13px;
  }

  a {
    font-weight: bold;
    color: #999;
    margin-left: 10px;
    font-size: 13px;
    &.selected {
      color: #444;
    }
    &:hover {
      color: #444;
    }
  }
`;

export const Profile = styled.div`
  display: flex;
  margin-left: 20px;
  padding-left: 20px;

  div {
    text-align: right;
    margin-right: 10px;

    strong {
      display: block;
      color: #333;
    }

    button {
      display: block;
      margin-top: 2px;
      line-height: 16px;
      font-size: 12px;
      color: #de3b3b;
      background: none;
      border: 0;
    }
  }
`;
