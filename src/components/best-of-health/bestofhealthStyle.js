import styled from 'styled-components';

export const BestOfHealthStyle = styled.div`
  padding: 100px 12%;
  color: #252525;
`;

export const BestOfHealthImg = styled.img`
  height: 366.6px;
  box-shadow: 0px 0px 17px 3px rgba(34, 60, 80, 0.1);
`;

export const BestOfHealthBtn = styled.button`
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
  margin-top: 80px;
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    background-color: #252525;
  }
`;

export const BestOfHealthArrow = styled.img`
  width: 18px;
  filter: invert(1);
`;

export const BestOfHealthAbs = styled.div`
  position: absolute;
  height: 440px;
  z-index: -1;
  width: 300px;
  left: -40px;
  top: -40px;
  background-color: #cfedf0;
`;
