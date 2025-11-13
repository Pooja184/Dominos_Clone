import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { FaUser, FaEnvelope, FaLock, FaEye, FaEyeSlash } from "react-icons/fa";
import { registerUser, resetAuthState } from "../redux/features/registerSlice.js";
import { toast } from "react-toastify";

const Register = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { loading, error, success } = useSelector((state) => state.auth);

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  const [userData, setUserData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    role: "user",
  });

  const handleChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(registerUser(userData));
  };

useEffect(() => {
  if (success) {
    toast.success("Registration successful!");
    dispatch(resetAuthState());
    navigate("/login");
  } 
  
  if (error) {
    console.log(error)
    // alert("user aleady exist")
    toast.error(error);        // show “User already exists”
    dispatch(resetAuthState()); // ❗ reset so it can show again next time
  }
}, [success, error, navigate, dispatch]);

  return (
    <div className="min-h-screen flex flex-col font-['Roboto',sans-serif] bg-[#F5EFE6]">
      {/* Header */}
      <header className="bg-[#1570c3] h-20 flex items-center justify-center shadow-md">
        <p className="text-white text-2xl md:text-3xl font-[Bebas_Neue]">
          Order Online With Auburn Domino's Pizza!
        </p>
      </header>

      {/* Form Section */}
      <div className="flex flex-1 justify-center items-center px-4 py-8">
        <form
          onSubmit={handleSubmit}
          className="bg-white border-2 border-[#1570c3] rounded-lg shadow-lg p-6 w-full max-w-sm"
        >
          <h2 className="text-center text-2xl font-semibold mb-5 text-gray-800">
            Register
          </h2>

          {/* Role Selection */}
          <div className="mb-3">
            <label className="block font-medium text-gray-700 mb-1">
              Select Role
            </label>
            <select
              name="role"
              value={userData.role}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-md outline-none focus:ring-2 focus:ring-blue-400 text-sm"
            >
              <option value="user">User</option>
              <option value="seller">Seller</option>
              <option value="admin">Admin</option>
            </select>
          </div>

          {/* Name */}
          <div className="mb-3">
            <label className="block font-medium text-gray-700 mb-1 text-sm">
              Name
            </label>
            <div className="flex items-center border border-gray-300 rounded-md px-2">
              <FaUser className="text-gray-500 mr-2 text-sm" />
              <input
                type="text"
                name="name"
                value={userData.name}
                onChange={handleChange}
                placeholder="Your Name"
                className="w-full p-2 text-sm outline-none"
              />
            </div>
          </div>

          {/* Email */}
          <div className="mb-3">
            <label className="block font-medium text-gray-700 mb-1 text-sm">
              Email
            </label>
            <div className="flex items-center border border-gray-300 rounded-md px-2">
              <FaEnvelope className="text-gray-500 mr-2 text-sm" />
              <input
                type="email"
                name="email"
                value={userData.email}
                onChange={handleChange}
                placeholder="Your Email"
                className="w-full p-2 text-sm outline-none"
              />
            </div>
          </div>

          {/* Password */}
          <div className="mb-3">
            <label className="block font-medium text-gray-700 mb-1 text-sm">
              Password
            </label>
            <div className="flex items-center border border-gray-300 rounded-md px-2 relative">
              <FaLock className="text-gray-500 mr-2 text-sm" />
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                value={userData.password}
                onChange={handleChange}
                placeholder="Your Password"
                className="w-full p-2 text-sm outline-none"
              />
              <span
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 cursor-pointer text-gray-500 text-sm"
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </span>
            </div>
          </div>

          {/* Confirm Password */}
          <div className="mb-4">
            <label className="block font-medium text-gray-700 mb-1 text-sm">
              Confirm Password
            </label>
            <div className="flex items-center border border-gray-300 rounded-md px-2 relative">
              <FaLock className="text-gray-500 mr-2 text-sm" />
              <input
                type={showConfirm ? "text" : "password"}
                name="confirmPassword"
                value={userData.confirmPassword}
                onChange={handleChange}
                placeholder="Confirm Password"
                className="w-full p-2 text-sm outline-none"
              />
              <span
                onClick={() => setShowConfirm(!showConfirm)}
                className="absolute right-3 cursor-pointer text-gray-500 text-sm"
              >
                {showConfirm ? <FaEyeSlash /> : <FaEye />}
              </span>
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-[#e31837] text-white py-2 rounded-md text-sm font-semibold hover:bg-red-700 transition"
            disabled={loading}
          >
            {loading ? "Registering..." : "Register"}
          </button>

          <p className="text-sm text-center mt-3">
            Already have an account?{" "}
            <span
              className="text-[#1570c3] font-medium hover:underline cursor-pointer"
              onClick={() => navigate("/login")}
            >
              Login
            </span>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Register;
