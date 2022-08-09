import styled from 'styled-components';

export const HomeCareStyle = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 80px 14%;

  button {
    border: none;
    color: #fff;
    width: 180px;
    height: 46px;
    background-color: #1becde;
    font-size: 18px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    cursor: pointer;
    margin: 20px auto;

    transition: 0.3s;

    &:hover {
      background-color: #252525;
    }
  }

  h1 {
    font-size: 40px;
    color: #252525;
  }
  p {
    color: #252525;
  }
`;

export const HomeCareArrow = styled.img`
  width: 18px;
  filter: invert(1);
`;

export const HomeCareItems = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 60px;
`;

export const HomeCareItem = styled.div`
  width: 350px;
  height: 295px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  gap: 20px;
  background-color: #252525;

  img {
    height: 80px;
  }
  border-radius: 15px;
  color: #fff;

  transition: 0.4s;

  &:hover {
    background-color: #1becde;
  }
`;
