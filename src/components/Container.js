import React from 'react';
import { Top } from './Top';
import { Projects } from './Projects';
import { About } from './About';
import { Socials } from './Socials';
import { Footer } from './Footer';
import { Link, animateScroll as scroll } from 'react-scroll';

export const Container = () => {
  return (
    <div>
      <div className='main-container'>
        <div className='div'>
          <Top></Top>
          <Projects></Projects>
          <About></About>
          <Socials></Socials>
          <Footer></Footer>
        </div>
        <Link
          className='scroll-up'
          activeClass='active'
          to='header'
          spy={true}
          smooth={true}
          offset={-70}
          duration={800}
        >
          <i className='fas fa-chevron-up up-arrow'></i>
        </Link>
      </div>
    </div>
  );
};

export default Container;
