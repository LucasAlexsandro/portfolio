import React from "react";
import * as C from "./Styles";

import Profile from "../../components/Profile/Profile";
import About from "../../components/About/About";

function Home() {
  return (
    <>
      <C.Container>
        <Profile />
        <About />
      </C.Container>
    </>
  );
}

export default Home;
