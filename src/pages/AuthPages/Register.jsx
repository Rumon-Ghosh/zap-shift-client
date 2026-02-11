import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import authIMG from "../../assets/authImage.png";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import useAuth from "../../hooks/useAuth";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import useAxiosSecure from "../../hooks/useAxiosSecure";

const Register = () => {
  const { registerWithPassword, updateUserProfile, googleLogin } = useAuth();
  const [imgLoading, setImgLoading] = useState(false);
  const [showPass, setShowPass] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const axiosSecure = useAxiosSecure();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const uploadImageToImgBB = async (imageFile) => {
    const formData = new FormData();
    formData.append("image", imageFile);
    const res = await fetch(
      `https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_IMGBB_API_KEY}`,
      {
        method: "POST",
        body: formData,
      },
    );
    const imgData = await res.json();
    return imgData?.data?.url || "";
  };

  // password login functionality
  const handleRegister = async (data) => {
    setImgLoading(true);
    try {
      const { name, email, image, password } = data;
      const imageFile = image[0];

      const uploadedUrl = await uploadImageToImgBB(imageFile);
      const registerUser = await registerWithPassword(email, password);
      if (!registerUser?.user) {
        toast.error("Registration failed!");
        return;
      }

      await updateUserProfile(name, uploadedUrl);
      await axiosSecure.post(`/users`, {
        name,
        email,
        image: uploadedUrl,
      });
      navigate(location?.state || "/");
      toast.success("User registered successfully!");
    } catch (error) {
      const message = error?.message || "Registration failed!";
      toast.error(message);
    } finally {
      setImgLoading(false);
      reset();
    }
  };

  // google loin functionality
  const handleGoogleLog = async () => {
    const result = await googleLogin();
    if (result?.user) {
      navigate(location?.state || "/");
      toast.success("Register using Google Successful!");
    } else {
      toast.error("Registration failed!");
    }
  };

  return (
    <section className="min-h-screen bg-white mt-10">
      <div className="grid lg:grid-cols-2 min-h-screen">
        <div className="flex items-center justify-center px-6 py-12">
          <div className="w-full max-w-md">
            <h2 className="text-3xl font-bold text-[#0b3b43]">
              Create an Account
            </h2>
            <p className="text-sm text-gray-500 mt-1">Register with ZapShift</p>

            <form
              onSubmit={handleSubmit(handleRegister)}
              className="mt-6 space-y-4"
            >
              <div>
                <label className="text-sm font-medium text-gray-600">
                  Name
                </label>
                <input
                  type="text"
                  placeholder="Zahid Hossain"
                  className="input input-bordered w-full mt-1"
                  {...register("name", { required: "Name is required!" })}
                />
              </div>
              {errors.name && (
                <p className="text-red-600 text-sm mt-1">
                  {errors.name.message}
                </p>
              )}
              <div>
                <label className="text-sm font-medium text-gray-600">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="Email"
                  className="input input-bordered w-full mt-1"
                  {...register("email", { required: "Email is required!" })}
                />
              </div>
              {errors.email && (
                <p className="text-red-600 text-sm mt-1">
                  {errors.email.message}
                </p>
              )}
              <div>
                <label className="text-sm font-medium text-gray-600">
                  Upload Image
                </label>
                <br />
                <input
                  type="file"
                  className="file-input w-full"
                  {...register("image", { required: "Image is required!" })}
                />
              </div>
              {errors.image && (
                <p className="text-red-600 text-sm mt-1">
                  {errors.image.message}
                </p>
              )}
              <div className="relative">
                <label className="text-sm font-medium text-gray-600">
                  Password
                </label>
                <input
                  type={showPass ? "text" : "password"}
                  placeholder="Password"
                  className="input input-bordered w-full mt-1"
                  {...register("password", {
                    required: "Password is required!",
                    minLength: {
                      value: 6,
                      message: "Password must be at least 6 characters long!",
                    },
                    pattern: {
                      value: /^(?=.*[A-Z])(?=.*\d).+$/,
                      message:
                        "Password must have 1 Uppercase and 1 integer at-least",
                    },
                  })}
                />
                <button
                  className="absolute right-2 bottom-3"
                  onClick={() => setShowPass(!showPass)}
                  type="button"
                >
                  {showPass ? <FaEyeSlash /> : <FaEye />}
                </button>
              </div>
              {errors.password && (
                <p className="text-red-500">{errors.password.message}</p>
              )}

              <button
                disabled={imgLoading}
                className="btn w-full bg-[#cfe86b] border-0 text-[#0b3b43] hover:bg-[#b8d95f]"
              >
                {imgLoading ? "Registering.." : "Register"}
              </button>
            </form>

            <p className="text-sm text-gray-500 mt-3">
              Already have an account?{" "}
              <Link
                to="/login"
                state={location?.state}
                className="text-[#0b5b6a] font-semibold"
              >
                Login
              </Link>
            </p>

            <div className="divider text-xs text-gray-400">Or</div>

            <button
              onClick={handleGoogleLog}
              className="btn btn-outline w-full"
            >
              <span className="text-lg">G</span>
              Register with google
            </button>
          </div>
        </div>

        <div className="hidden lg:flex items-center justify-center bg-[#f6f9e8]">
          <img src={authIMG} alt="Register illustration" className="w-3/5" />
        </div>
      </div>
    </section>
  );
};

export default Register;
