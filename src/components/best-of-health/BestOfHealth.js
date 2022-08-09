import React from 'react';
import {
  BestOfHealthAbs,
  BestOfHealthArrow,
  BestOfHealthBtn,
  BestOfHealthImg,
  BestOfHealthStyle,
} from './bestofhealthStyle';
import arrowRight from '../../images/arrow_right_icon.svg';
import img2 from '../../images/img-2.png';
import img3 from '../../images/img-3.png';

function BestOfHealth() {
  return (
    <BestOfHealthStyle>
      <h1 style={{fontSize: '40px'}}>Best Of Health care for you</h1>
      <p style={{margin: '20px 0 140px'}}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
        labore et dolore magna aliqua.
        <br />
        Ut enim ad minim veniam, quis
      </p>
      <div
        style={{
          display: 'flex',
          gap: '30px',
          marginLeft: '40px',
          position: 'relative',
        }}
      >
        <BestOfHealthImg src={img2} alt="" style={{height: '366.6px'}} />
        <BestOfHealthImg src={img3} alt="" style={{height: '366.6px'}} />
        <BestOfHealthAbs />
      </div>
      <BestOfHealthBtn>
        Read More
        <BestOfHealthArrow src={arrowRight} alt="" style={{width: '18px'}} />
      </BestOfHealthBtn>
    </BestOfHealthStyle>
  );
}

export default BestOfHealth;
