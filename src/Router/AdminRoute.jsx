import React from 'react';
import useRole from '../hooks/useRole';
import { Link } from 'react-router';

const AdminRoute = ({children}) => {
  const { role } = useRole();

  if (role !== "admin") return (
    <div className='flex flex-col justify-center items-center'>
      <p className="text-center mt-10 text-red-500">Access Denied. You do not have permission to view this page.</p>
      <button className='btn btn-primary text-black mt-4'>
        <Link to={`/`}>Go Home</Link>
      </button>
    </div>
  )

  return children;
};

export default AdminRoute;