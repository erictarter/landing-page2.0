import React from 'react';

export const Socials = () => {
  return (
    <div>
      <div className='socials center-maxw'>
        <h1 className='social-header'>Find Me On...</h1>
        <div className='social-grid'>
          <div className='github'>
            <a href='https://github.com/erictarter' target='_blank'>
              <i className='fab fa-github instagram-icon'></i>
            </a>
          </div>
          <div className='face'>
            <a href='https://facebook.com' target='_blank'>
              <i className='fab fa-facebook-square'></i>
            </a>
          </div>
          <div className='insta'>
            <a href='https://www.instagram.com/erictarter/' target='_blank'>
              <i className='fab fa-instagram'></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Socials;
