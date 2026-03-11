import React from "react";
import { useForm, useWatch } from "react-hook-form";
import { useLoaderData, useNavigate } from "react-router";
import useAuth from "../../hooks/useAuth";
import agentPending from "../../assets/agent-pending.png";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import toast from "react-hot-toast";

const BeARider = () => {
  const serviceCenters = useLoaderData() || [];
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    control,
  } = useForm();

  const regions = serviceCenters.map((center) => center.region);
  const uniqueRegions = [...new Set(regions)];

  const getDistrictsByRegion = (region) => {
    if (!region) return [];
    return serviceCenters
      .filter((center) => center.region === region)
      .map((center) => center.district);
  };

  const districts = useWatch({ control, name: "region" });

  const filteredDistricts = getDistrictsByRegion(districts);

  const handleRiderApplication = async (data) => {
    try {
      const result = await axiosSecure.post("/rider", data);

      if (result.data.insertedId) {
        toast.success("Your application has been submitted successfully!");
        navigate("/");
        reset();
      }
    } catch (error) {
      // axios error response from backend
      if (error.response && error.response.data?.message) {
        toast.error(error.response.data.message);
      } else {
        toast.error("Failed to submit your application. Please try again.");
      }
    }
  };

  return (
    <div className="w-11/12 mx-auto p-5 rounded-2xl bg-white my-10">
      <h1 className="text-4xl font-bold mb-4">Be a Rider</h1>
      <p className="text-lg/relaxed mb-4 max-w-180">
        Enjoy fast, reliable parcel delivery with real-time tracking and zero
        hassle. From personal packages to business shipments — we deliver on
        time, every time.
      </p>
      <div className="grid md:grid-cols-2 gap-10 items-center">
        <form
          onSubmit={handleSubmit(handleRiderApplication)}
          className="space-y-4"
        >
          <h3 className="text-2xl font-bold mb-2">Tell Us About Yourself</h3>
          <fieldset className="fieldset">
            <legend className="fieldset-legend">Your Name</legend>
            <input
              type="text"
              defaultValue={user?.displayName}
              className="input w-full"
              placeholder="Your Name"
              {...register("name", { required: "Name is required" })}
            />
            {errors.name && (
              <p className="text-red-500 mt-1">{errors.name.message}</p>
            )}
          </fieldset>
          <fieldset className="fieldset">
            <legend className="fieldset-legend">Driving License Number</legend>
            <input
              type="text"
              className="input w-full"
              placeholder="Driving License Number"
              {...register("license", {
                required: "License number is required",
              })}
            />
            {errors.license && (
              <p className="text-red-500 mt-1">{errors.license.message}</p>
            )}
          </fieldset>
          <fieldset className="fieldset">
            <legend className="fieldset-legend">Your Email</legend>
            <input
              type="email"
              defaultValue={user?.email}
              className="input w-full"
              placeholder="Your Email"
              {...register("email", { required: "Email is required" })}
            />
            {errors.email && (
              <p className="text-red-500 mt-1">{errors.email.message}</p>
            )}
          </fieldset>
          <fieldset className="fieldset">
            <legend className="fieldset-legend">Your Region</legend>
            <select
              className="select w-full"
              {...register("region", { required: "Region is required" })}
            >
              <option value="">Select a region</option>
              {uniqueRegions.map((region, index) => (
                <option value={region} key={index}>
                  {region}
                </option>
              ))}
            </select>
            {errors.region && (
              <p className="text-red-500 mt-1">{errors.region.message}</p>
            )}
          </fieldset>
          <fieldset className="fieldset">
            <legend className="fieldset-legend">Your District</legend>
            <select
              className="select w-full"
              {...register("district", { required: "District is required" })}
            >
              <option value="">Select a district</option>
              {filteredDistricts.map((district, index) => (
                <option value={district} key={index}>
                  {district}
                </option>
              ))}
            </select>
            {errors.district && (
              <p className="text-red-500 mt-1">{errors.district.message}</p>
            )}
          </fieldset>
          <fieldset className="fieldset">
            <legend className="fieldset-legend">Your Phone</legend>
            <input
              type="tel"
              className="input w-full"
              placeholder="Your Phone"
              {...register("phone", { required: "Phone number is required" })}
            />
            {errors.phone && (
              <p className="text-red-500 mt-1">{errors.phone.message}</p>
            )}
          </fieldset>
          <fieldset className="fieldset">
            <legend className="fieldset-legend">NID No</legend>
            <input
              type="text"
              className="input w-full"
              placeholder="Your NID Number"
              {...register("nid", { required: "NID number is required" })}
            />
            {errors.nid && (
              <p className="text-red-500 mt-1">{errors.nid.message}</p>
            )}
          </fieldset>
          <fieldset className="fieldset">
            <legend className="fieldset-legend">
              Bike Registration Number
            </legend>
            <input
              type="text"
              className="input w-full"
              placeholder="Your Bike Registration Number"
              {...register("bikeRegistration", {
                required: "Bike registration number is required",
              })}
            />
            {errors.bikeRegistration && (
              <p className="text-red-500 mt-1">
                {errors.bikeRegistration.message}
              </p>
            )}
          </fieldset>
          <button type="submit" className="btn btn-primary text-black">
            Submit Application
          </button>
        </form>
        <div className="hidden md:block">
          <img
            src={agentPending}
            alt="Agent Pending"
            className="w-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default BeARider;
