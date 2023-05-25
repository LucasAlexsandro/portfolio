import React from 'react'
import { HeaderContainer } from './Styles'
import HackerIco from "../../assets/images/hacker-ico.png"

export default function Header() {
  return (
    <HeaderContainer>
      <ul>
        <li><a href="#">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Sec</a></li>
        <li><a href=""><img src={HackerIco} alt="hackersec"/></a></li>
        <li><a href="#">Portfolio</a></li>
        <li><a href="#">Blog</a></li>
        <li><a href="#">Contact</a></li>
      </ul>
    </HeaderContainer>
  )
}
