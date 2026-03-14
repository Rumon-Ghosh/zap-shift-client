import React from 'react';
import useAxiosSecure from './useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import useAuth from './useAuth';

const useRole = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const { data: role = {} } = useQuery({
    queryKey: ["role", user?.email],
    queryFn: async () => {
      const result = await axiosSecure.get(`/users/${user?.email}/role`);
      return result?.data;
    }
  })
  return {role: role};
};

export default useRole;