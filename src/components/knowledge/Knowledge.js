import React from 'react';
import {KnowledgeStyle} from './knowledgeStyle';
import playIcon from '../../images/play-icon.png';

function Knowledge() {
  return (
    <KnowledgeStyle>
      <div style={{display: 'flex', flexDirection: 'column', gap: '20px'}}>
        <h1>Knowledge of center</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut <br />
          labore et dolore magna aliqua. Ut enim ad minim veniam
        </p>
      </div>
      <div>
        <img src={playIcon} alt="" />
      </div>
    </KnowledgeStyle>
  );
}

export default Knowledge;
