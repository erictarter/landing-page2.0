import React from 'react';

export const About = () => {
  return (
    <div>
      <div className='about-container center-maxw'>
        <h1 className='projects-header' id='link-3'>
          About
        </h1>
        <div className='about-para'>
          <div className='words'>
            My Name is Eric Tarter. I am a Front End Developer living in the
            Pacific Northwest. I have been programming for over two years. Every
            day I have invested hours of learning with my free time. Most of my
            projects are built using React.
          </div>
        </div>
        <div className='avatar'></div>
        <h2 className='lf-header'>Languages & Frameworks</h2>
        <div className='lf'>
          <div className='lf-grid'>
            <div className='pl'>
              <i className='fab fa-js-square js-icon'></i>
              <span> JavaScript</span>
            </div>
            <div className='pl'>
              <i className='fab fa-sass sass-icon'></i>
              <span> Sass</span>
            </div>
            <div className='pl'>
              <i className='fab fa-css3 css-icon'></i>
              <span> CSS</span>
            </div>
            <div className='pl'>
              <i className='fab fa-html5 html-icon'></i>
              <span> HTML</span>
            </div>
            <div className='pl'>
              <i className='fab fa-react react-icon'></i>
              <span>React</span>
            </div>
            <div className='pl'>
              <i className='fab fa-bootstrap bs-icon'></i>
              <span>Bootstrap </span>
            </div>
          </div>
        </div>
      </div>
      <div className='line'></div>
    </div>
  );
};

export default About;
