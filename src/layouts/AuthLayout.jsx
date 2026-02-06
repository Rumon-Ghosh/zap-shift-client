import React from 'react';
import { Outlet } from 'react-router';
import Logo from '../components/Logo/Logo';

const AuthLayout = () => {
  return (
    <div className='w-11/12 mx-auto'>
      <Logo></Logo>
      <Outlet></Outlet>
    </div>
  );
};

export default AuthLayout;