import React from "react";
import styled from "styled-components";
import Header from "./components/header/Header";
import BestOfHealth from "./components/best-of-health/BestOfHealth";
import Knowledge from "./components/knowledge/Knowledge";
import HomeCare from "./components/home-care/HomeCare";

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
