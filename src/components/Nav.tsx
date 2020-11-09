import React from "react";
import { Link } from 'react-router-dom';

const navBar = document.querySelector('.nav-bar');

const burgerReveal = () => {
  navBar?.classList.toggle('mobile-menu-display');
  console.log("wtf!?!! Gah!! So effed up!!");

};

export default function Nav() {

  return (
    <nav>
      <div className="logo">
        <Link to='/'>
          <h1>Keith Tharp</h1>
        </Link>
      </div>
      <ul className="nav-bar">
        <Link to='/about'>
          <li onClick={burgerReveal}>About</li>
        </Link>
        <Link to='/portfolio'>
          <li onClick={burgerReveal}>Portfolio</li>
        </Link>
        <Link to='/contact'>
          <li onClick={burgerReveal}>Contact</li>
        </Link>
      </ul>
      <div className="mobile-menu" onClick={burgerReveal}>
        <div className="top-bun"></div>
        <div className="burger-patty"></div>
        <div className="bottom-bun"></div>
      </div>
    </nav>
  )

};