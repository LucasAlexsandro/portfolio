import React from "react";

import Profile from "../../components/Profile/Profile";
import About from "../../components/About/About";
import Portfolio from "../../components/Portfolio/Portfolio";
import Footer from "../../components/Footer/Footer";

function Home() {
  return (
    <>
      <Profile />
      <About />
      {/* <Portfolio /> */}
      <Footer />
    </>
  );
}

export default Home;
