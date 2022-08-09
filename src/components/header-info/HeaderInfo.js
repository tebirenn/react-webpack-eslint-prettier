import React from 'react';
import {HeaderInfoStyle, SliderButton} from './headerInfoStyle';
import arrowRight from '../../images/arrow_right_icon.svg';
import infoPng from '../../images/img-1.png';

function HeaderInfo() {
  return (
    <HeaderInfoStyle>
      <div className="info-top">
        <div style={{display: 'flex', flexDirection: 'column', gap: '20px'}}>
          <h1 style={{fontSize: '60px'}}>
            <span style={{color: '#15e4d0'}}>Health</span>
            <br />
            <span style={{color: '#151515'}}>Care</span>
          </h1>
          <p style={{color: '#252525'}}>There are many variations of passages of Lorem Ipsum</p>
          <div style={{display: 'flex', gap: '15px'}}>
            <button className="contact-btn">Contact Now</button>
            <button className="quote-btn">Get A Quote</button>
          </div>
        </div>
        <div>
          <img src={infoPng} alt="" style={{width: '540px'}} />
        </div>
      </div>
      <div style={{display: 'flex', gap: '20px'}}>
        <SliderButton>
          <img src={arrowRight} alt="" style={{width: '24px', transform: 'rotate(180deg)'}} />
        </SliderButton>
        <SliderButton>
          <img src={arrowRight} alt="" style={{width: '24px'}} />
        </SliderButton>
      </div>
    </HeaderInfoStyle>
  );
}

export default HeaderInfo;
