import React, { useState } from 'react';
import { Link, animateScroll as scroll } from 'react-scroll';

export const Top = () => {
  setTimeout(() => {
    document.querySelector('.message1').classList.add('show');
  }, 200);
  setTimeout(() => {
    document.querySelector('.message2').classList.add('show');
  }, 800);
  setTimeout(() => {
    document.querySelector('.message3').classList.add('show');
  }, 1400);
  setTimeout(() => {
    document.querySelector('.message4').classList.add('show');
  }, 2000);
  setTimeout(() => {
    document.querySelector('.message1').classList.remove('show');
    document.querySelector('.message2').classList.remove('show');
    document.querySelector('.message3').classList.remove('show');
    document.querySelector('.message4').classList.remove('show');
    document.querySelector('.ss-links').classList.add('show');
  }, 3000);

  return (
    <div>
      <div className='header'>
        <div className='message'>
          <span className='message1'>Welcome</span>
          <br />
          <span className='message2'>To</span> <br />
          <span className='message3'>My</span> <br />
          <span className='message4'>Page</span>
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
            My Blog
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
