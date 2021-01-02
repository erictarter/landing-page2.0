import React, { useState } from 'react';
import { Link, animateScroll as scroll } from 'react-scroll';

export const Top = () => {
  setTimeout(() => {
    document.querySelector('.message1').classList.add('show');
  }, 200);
  setTimeout(() => {
    document.querySelector('.message1').classList.remove('show');
  }, 2000);
  setTimeout(() => {
    document.querySelector('.ss-links').classList.add('show');
  }, 2700);
  setTimeout(() => {
    document.querySelector('.logo').classList.add('show');
  }, 3200);
  setTimeout(() => {
    document.querySelector('.name').classList.add('show');
  }, 3750);
  setTimeout(() => {
    document.querySelector('.message').style.display = 'none';
  }, 2750);

  return (
    <div>
      <div className='header' id='header'>
        <div className='logo'>
          <div className='logo-container'>
            <div className='name'>Eric Tarter</div>
            <div className='slogan'>Front End Developer</div>
          </div>
        </div>
        <div className='message'>
          <span className='message1'>Welcome</span>
          <br />
        </div>
        <div className='mobile-overlay'></div>
        <div className='avatar-2'></div>
        <div className='ss-links'>
          {/* <div className='welcome-msg'>Welcome To My Page</div> */}
          {/* SMOOTH SCROLL LINKS */}
          <Link
            className='ss-link'
            activeClass='active'
            to='link-1'
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            Projects
          </Link>
          <Link
            className='ss-link'
            activeClass='active'
            to='link-2'
            spy={true}
            smooth={true}
            offset={-70}
            duration={700}
          >
            Blog Post
          </Link>
          <Link
            className='ss-link'
            activeClass='active'
            to='link-3'
            spy={true}
            smooth={true}
            offset={-70}
            duration={1100}
          >
            About
          </Link>
          <Link
            className='ss-link'
            activeClass='active'
            to='link-4'
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            Socials
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Top;
