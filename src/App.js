import BestOfHealth from './components/best-of-health/BestOfHealth';
import Header from './components/header/Header';
import HomeCare from './components/home-care/HomeCare';
import Knowledge from './components/knowledge/Knowledge';
import React from 'react';
import styled from 'styled-components';

const AppWraper = styled.div`
  width: 100vw;
  min-height: 100vh;
  box-sizing: border-box;
`;

function App() {
  return (
    <AppWraper>
      <Header />
      <BestOfHealth />
      <Knowledge />
      <HomeCare />
    </AppWraper>
  );
}

export default App;
