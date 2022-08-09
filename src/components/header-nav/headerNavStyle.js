import styled from 'styled-components';

export const HeaderNavStyle = styled.div`
  height: 90px;
  background-color: transparent;
  width: 100vw;
  box-sizing: border-box;
  display: flex;
  padding: 0 14% 0 5%;
  justify-content: space-between;
  align-items: center;

  a {
    text-decoration: none;
    color: #272a2a;
    font-size: 18px;
    transition: 0.2s;

    &:hover {
      color: #15e4d0;
    }
  }

  div {
    &:last-child {
      display: flex;
      align-items: center;
      gap: 45px;
    }
  }
`;
