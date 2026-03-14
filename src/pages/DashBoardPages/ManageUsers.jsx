import React from "react";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import Swal from "sweetalert2";

const ManageUsers = () => {
  const axiosSecure = useAxiosSecure();

  const { data: users = [], refetch } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await axiosSecure.get("/users");
      return res.data;
    },
  });

  const handleUpdateRole = async (id, role) => {
    try {
      const updateRole = await axiosSecure.patch(`/users/${id}?role=${role}`);
      if (updateRole.data.modifiedCount) {
        if (role === "admin") {
          Swal.fire("Success!", `User role has been updated to Admin.`, "success");
        } else {
          Swal.fire("Success!", `User role has been removed from Admin.`, "success");
        }
      refetch();
    }
    } catch (error) {
      Swal.fire("Error!", "Failed to update user role.", "error");
      console.log("Error on update role ->", error)
    }
  };

  return (
    <div>
      <h2 className="text-5xl">Manage Users {users.length}</h2>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Email</th>
              <th>User Role</th>
              <th>Joining Date</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {users.map((user, index) => (
              <tr key={user._id}>
                <th>{index + 1}</th>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle h-12 w-12">
                        <img src={user?.image} alt="User Image" />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">{user.name}</div>
                    </div>
                  </div>
                </td>
                <td>{user?.email}</td>
                <td>{user.role}</td>
                <td>{new Date(user.createdAt).toDateString()}</td>
                <th className="flex gap-1">
                  {user.role === "user" ? (
                    <button
                      onClick={() => handleUpdateRole(user._id, "admin")}
                      className="btn btn-primary btn-xs text-black"
                    >
                      Make Admin
                    </button>
                  ) : (
                    <button
                      onClick={() => handleUpdateRole(user._id, "user")}
                      className="btn btn-warning btn-xs"
                    >
                      Remove Admin
                    </button>
                  )}
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageUsers;
