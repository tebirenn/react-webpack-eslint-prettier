import React from 'react';
import {HomeCareStyle, HomeCareArrow, HomeCareItems, HomeCareItem} from './homeCareStyle';
import arrowRight from '../../images/arrow_right_icon.svg';
import icon1 from '../../images/icon-1.png';
import icon2 from '../../images/icon-2.png';
import icon3 from '../../images/icon-3.png';

function HomeCare() {
  return (
    <HomeCareStyle>
      <h1>Why choose 24hr home care</h1>
      <p>labore et dolore magna aliqua. Ut enim ad minim veniam</p>
      <HomeCareItems>
        <HomeCareItem>
          <img src={icon1} alt="" />
          <h2>
            Daily <br />
            care <br />
            experts <br />
          </h2>
        </HomeCareItem>
        <HomeCareItem style={{backgroundColor: '#1becde'}}>
          <img src={icon2} alt="" />
          <h2>
            Avalible <br />
            24/7 <br />
          </h2>
        </HomeCareItem>
        <HomeCareItem>
          <img src={icon3} alt="" />
          <h2>
            Balanced <br />
            care <br />
          </h2>
        </HomeCareItem>
      </HomeCareItems>

      <button>
        Get A Quote
        <HomeCareArrow src={arrowRight} alt="" style={{width: '18px'}} />
      </button>
    </HomeCareStyle>
  );
}

export default HomeCare;
