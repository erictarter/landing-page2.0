import React from 'react';

export const Socials = () => {
  return (
    <div>
      <div className='socials center-maxw'>
        <h1 className='social-header' id='link-4'>
          Find Me On
        </h1>
        <div className='social-grid'>
          <div className='github'>
            <a
              className='social'
              href='https://github.com/erictarter'
              target='_blank'
            >
              <i className='fab fa-github instagram-icon github'></i>
            </a>
          </div>
          <div className='twitter'>
            <a href='https://twitter.com/eric39804248' target='_blank'>
              <i className='fab fa-twitter'></i>
            </a>
          </div>
          <div className='linkedin'>
            <a
              href='https://www.linkedin.com/in/eric-tarter-b2549a203/'
              target='_blank'
            >
              <i class='fab <i class="fab fa-linkedin linkedin"></i>'></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Socials;
