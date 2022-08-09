import styled from 'styled-components';

export const HeaderInfoStyle = styled.div`
  background-color: transparent;
  display: flex;
  flex-direction: column;
  padding: 0 8% 30px;
  width: 100vw;
  box-sizing: border-box;

  .contact-btn {
    border: none;
    background-color: #4bc5b8;
    color: #fff;
    height: 53px;
    width: 170px;
    font-size: 18px;
    cursor: pointer;
  }

  .quote-btn {
    border: none;
    background-color: #252525;
    color: #fff;
    height: 53px;
    width: 170px;
    font-size: 18px;
    cursor: pointer;
    transition: 0.4s;

    &: hover {
      background-color: #4bc5b8;
    }
  }

  .info-top {
    width: 90%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-left: 10%;
  }
`;

export const SliderButton = styled.button`
  width: 65px;
  height: 65px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 4px solid #000;
  border-radius: 100%;
  background-color: transparent;
  cursor: pointer;
  transition: 0.4s;

  img {
    transition: 0.4s;
  }

  &:hover {
    border: 4px solid #4bc5b8;
    img {
      filter: invert(64%) sepia(53%) saturate(397%) hue-rotate(124deg) brightness(94%) contrast(96%);
    }
  }
`;
