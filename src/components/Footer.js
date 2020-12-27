import React from 'react';

export const Footer = () => {
  let year = new Date().getFullYear();
  console.log(year);
  return (
    <div>
      <div className='footer'>&copy; Eric Tarter {year}</div>
    </div>
  );
};
export default Footer;
