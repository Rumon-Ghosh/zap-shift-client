import React from 'react';
import LogoIMG from '../../assets/logo.png'
import { Link } from 'react-router';

const Logo = () => {
  return (
    <Link to="/">
      <div className='flex items-end'>
        <img className='w-8' src={LogoIMG} alt="Brand Logo" />
        <h3 className='text-xl font-bold -ml-3'>ZapShift</h3>
      </div>
    </Link>
  );
};

export default Logo;