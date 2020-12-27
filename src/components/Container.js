import React from 'react';
import { Top } from './Top';
import { Projects } from './Projects';
import { About } from './About';
import { Socials } from './Socials';
import { Footer } from './Footer';

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
      </div>
    </div>
  );
};

export default Container;
