import { useQuery } from "@tanstack/react-query";
import React from "react";
import useAuth from "../../hooks/useAuth";
import { GrUpdate } from "react-icons/gr";
import { FaTrash } from "react-icons/fa";
import { FaMagnifyingGlass } from "react-icons/fa6";
import Swal from "sweetalert2";
import toast from "react-hot-toast";
import { Link } from "react-router";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import useAxios from "../../hooks/useAxios";

const MyParcel = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const axios = useAxios();

  const {
    data: myParcels = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["my-parcels", user?.email],
    queryFn: async () => {
      const result = await axiosSecure.get(`/parcels`);
      return result.data;
    },
  });

  const handleParcelDelete = async (id) => {
    try {
      Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
      }).then(async (result) => {
        if (result.isConfirmed) {
          const res = await axiosSecure.delete(`/parcels/${id}`);
          if (res.data.deletedCount > 0) {
            refetch();
            Swal.fire({
              title: "Deleted!",
              text: "Your parcel request has been deleted.",
              icon: "success",
            });
          }
        }
      });
    } catch (error) {
      toast.error("Failed to delete the parcel. Please try again.");
      console.error("Error deleting parcel:", error);
    }
  };

  const sendToPayment = async (id) => {
    try {
      const { data } = await axios.post(`/create-checkout-session`, {
        parcelId: id,
      });
      // console.log(data);
      if (data?.url) {
        window.location.assign(data?.url);
      }
    } catch (error) {
      console.error(error);
    }
  };

  if (isLoading) return <div className="text-center mt-20">Loading...</div>;

  if (myParcels.length === 0) return (
    <div>
      <h4 className="text-4xl font-bold my-4">Please Send Your First Parcel !!</h4>
      <button className="btn btn-primary text-black">
        <Link to={`/send-parcel`}>Send A Parcael</Link>
      </button>
    </div>
  )

  return (
    <div>
      <h3 className="text-3xl font-semibold mb-4">
        All My Parcels {myParcels?.length}
      </h3>
      <div className="overflow-x-auto">
        <table className="table table-zebra">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Receiver</th>
              <th>CratedAt</th>
              <th>Payment</th>
              <th>Delivery Status</th>
              <th>Cost</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {myParcels.map((parcel, index) => (
              <tr key={parcel._id}>
                <th>{index + 1}</th>
                <td>{parcel.parcelName}</td>
                <td>{parcel.receiverName}</td>
                <td>{new Date(parcel.createdAt).toDateString()}</td>
                <td>
                  {parcel.paymentStatus === "paid" ? (
                    "Paid"
                  ) : (
                    <button
                      onClick={() => sendToPayment(parcel._id)}
                      className="btn btn-sm btn-primary text-black"
                    >
                      Pay
                    </button>
                  )}
                </td>
                <td>{parcel.deliveryStatus}</td>
                <td>{parcel.cost}</td>
                <td className="space-x-2">
                  <button className="btn btn-square btn-primary text-black">
                    <FaMagnifyingGlass />
                  </button>
                  <button className="btn btn-square btn-accent">
                    <GrUpdate />
                  </button>
                  <button
                    disabled={parcel.paymentStatus === "paid"}
                    onClick={() => handleParcelDelete(parcel?._id)}
                    className="btn btn-square btn-warning"
                  >
                    <FaTrash />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyParcel;
