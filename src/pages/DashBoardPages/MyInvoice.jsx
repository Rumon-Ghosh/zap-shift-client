import { useQuery } from "@tanstack/react-query";
import React from "react";
import useAuth from "../../hooks/useAuth";
import useAxiosSecure from "../../hooks/useAxiosSecure";

const MyInvoice = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();

  const { data: invoices = [], isLoading } = useQuery({
    queryKey: ["invoices", user?.email],
    queryFn: async () => {
      const response = await axiosSecure.get(`/invoices`);
      return response.data;
    },
  });

  // console.log(invoices);

  if (isLoading) {
    return <p className="text-center mt-10">Loading invoices...</p>;
  }

  return (
    <div>
      <h2 className="text-3xl font-bold">My Invoice</h2>
      <div className="overflow-x-auto">
        <table className="table table-zebra">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>PaidBy</th>
              <th>TrackingId</th>
              <th>TransactionId</th>
              <th>Cost</th>
              <th>Paid-At</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {invoices.map((invoice, index) => (
              <tr key={invoice?._id}>
                <th>{index + 1}</th> 
                <td>{invoice?.parcelName}</td>
                <td>{invoice?.paidBy}</td>
                <td>{invoice?.trackingId}</td>
                <td>{invoice?.transactionId}</td>
                <td>{invoice?.amount}</td>
                <td>{new Date(invoice?.paidAt).toLocaleDateString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyInvoice;
