import React from 'react';
import { Link, animateScroll as scroll } from 'react-scroll';

export const Top = () => {
  return (
    <div>
      <div className='header'>
        <div className='ss-links'>
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
