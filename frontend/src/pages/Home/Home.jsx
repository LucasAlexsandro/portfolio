import React from 'react'
import BtnFixedMenu from '../../components/BtnFixedMenu/BtnFixedMenu';
import Profile from "../../components/Profile/Profile";
import About from '../../components/About/About';
import Contact from '../../components/Contact/Contact';
import Services from '../../components/Services/Services';
import Header from '../../components/Header/Header';
import BlogArea from '../../components/BlogArea/BlogArea';
import Footer from '../../components/Footer';
import Exp from '../../components/Exp';

function Home() {
  return (
    <>
      {/* <Header /> */}
      <BtnFixedMenu />
      <Profile />
      <About />
      <Exp />
      <Services />
      {/* <BlogArea /> */}
      <Footer />
    </>
  )
}

export default Home