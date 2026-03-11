import { useQuery } from "@tanstack/react-query";
import { FaTrash, FaUserAltSlash, FaUserCheck } from "react-icons/fa";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import Swal from "sweetalert2";

const ApproveRiders = () => {
  const axiosSecure = useAxiosSecure();
  // const queryClient = useQueryClient();

  const { data: riders = [], isLoading, refetch } = useQuery({
    queryKey: ["riders", "pending"],
    queryFn: () => axiosSecure.get("/riders"),
  });


  const updateStatus = async (id, status) => {
    const result = await axiosSecure.patch(`/riders/${id}?status=${status}`,);
    if (result?.data?.modifiedCount > 0) {
      Swal.fire("Updated!", "Rider status has been changed.", "success");
      refetch()
    }
  } 

  const deleteRiderReq = async (id) => {
    const result = await axiosSecure.delete(`/riders/${id}`,);
    if (result.data.deletedCount > 0) {
      Swal.fire("Updated!", "Rider has been deleted successfully.", "success");
      refetch()
    }
  }



  if (isLoading)
    return (
      <div className="flex items-center justify-center h-[70vh]">
        <span className="loading loading-spinner loading-xl"></span>
      </div>
    );
  
  if (riders.data.length === 0) return (
    <div>
       <h2 className="text-4xl font-semibold my-5">There Is No Pending Request At This Moment!</h2>
    </div>
  )

  return (
    <div>
      <h2 className="text-4xl font-semibold my-5">Rider Pending Approval: {riders.data.length}</h2>
      <div>
        <div className="overflow-x-auto">
          <table className="table table-zebra">
            {/* head */}
            <thead>
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>Email</th>
                <th>District</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              {riders.data.map((rider, index) => (
                <tr key={rider._id}>
                  <th>{index + 1}</th>
                  <td>{rider?.name}</td>
                  <td>{rider?.email}</td>
                  <td>{rider?.district}</td>
                  <td>
                    <span
                      className={`badge ${rider.status === "pending" ? "badge-ghost" : rider.status === "approved" ? "badge-success" : "badge-error"}`}
                    >
                      {rider?.status}
                    </span>
                  </td>
                  <td className="flex gap-1">
                    <button
                      onClick={() => updateStatus(rider._id, "approved")}
                      className="btn">
                      <FaUserCheck />
                    </button>
                    <button
                      onClick={() => updateStatus(rider._id, "rejected")}
                      className="btn">
                      <FaUserAltSlash />
                    </button>
                    <button
                      onClick={() => deleteRiderReq(rider._id)}
                      className="btn">
                      <FaTrash />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ApproveRiders;
