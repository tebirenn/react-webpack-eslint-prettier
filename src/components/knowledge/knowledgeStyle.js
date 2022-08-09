import styled from 'styled-components';
import bg from '../../images/knowledge-bg.png';

export const KnowledgeStyle = styled.div`
  background-image: url(${bg});
  display: flex;
  align-items: center;
  gap: 60px;
  padding: 0 15%;
  color: #fff;
  height: 550px;
  box-sizing: border-box;

  h1 {
    font-size: 40px;
  }

  p {
    line-height: 24px;
  }
`;
