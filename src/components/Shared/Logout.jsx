import React from 'react';
import useAuth from '../../hooks/useAuth';
import { useNavigate } from 'react-router';

const Logout = () => {
  const { LogOutUser } = useAuth()
  const nevigate = useNavigate()
  const handleLogOut = async () => {
    const result = await LogOutUser();
    nevigate("/")
    return result
  }
  return (
    <div>
      <button
        onClick={handleLogOut}
        className='btn btn-primary text-black'>LogOut</button>
    </div>
  );
};

export default Logout;