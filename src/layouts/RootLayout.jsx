import React from 'react';
import { Outlet } from 'react-router';
import Footer from '../components/Shared/Footer';
import Navbar from '../components/Shared/Navbar';

const RootLayout = () => {
  return (
    <div className='flex flex-col min-h-screen'>
      <Navbar></Navbar>
      <div className='flex-1'>
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default RootLayout;