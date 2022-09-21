import React from "react";
import * as C from "./Styles";

import Profile from "../../components/Profile/Profile";
import About from "../../components/About/About";
import Portfolio from "../../components/Portfolio/Portfolio";

function Home() {
  return (
    <>
      <C.Container>
        <Profile />
        {/* <About />
        <Portfolio /> */}
      </C.Container>
    </>
  );
}

export default Home;
