import React from 'react'
import Profile from "../../components/Profile/Profile";
import About from '../../components/About/About';
import Contact from '../../components/Contact/Contact';
import Services from '../../components/Services/Services';
import Header from '../../components/Header/Header';

function Home() {
  return (
    <>
      <Header />
      <Profile />
      {/* <About /> */}
      {/* <Services /> */}
      <Contact />
    </>
  )
}

export default Home