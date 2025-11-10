import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaEnvelope, FaLock, FaEye, FaEyeSlash } from "react-icons/fa";

const Login = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Later, add axios POST logic for login
  };

  return (
    <div className="h-screen w-full flex flex-col font-['Roboto',sans-serif] bg-[#F5EFE6]">
      {/* Header */}
      <header className="bg-[#1570c3] h-24 flex items-center justify-center shadow-md">
        <p className="text-white text-2xl md:text-3xl font-[Bebas_Neue] text-center">
          Order Online With Auburn Domino's Pizza!
        </p>
      </header>

      {/* Main Section (Full Page Form) */}
      <div className="flex-1 flex justify-center items-center">
        <form
          onSubmit={handleSubmit}
          className="bg-white border-2 border-[#1570c3] rounded-xl shadow-lg p-8 w-[90%] sm:w-[60%] md:w-[40%] lg:w-[30%]"
        >
          <h2 className="text-center text-3xl font-semibold mb-6 text-gray-800">
            Login
          </h2>

          {/* Email */}
          <div className="mb-5">
            <label className="block font-medium text-gray-700 mb-2">
              Email
            </label>
            <div className="flex items-center border border-gray-300 rounded-md px-2">
              <FaEnvelope className="text-gray-500 mr-2" />
              <input
                type="email"
                name="email"
                value={userData.email}
                onChange={handleChange}
                placeholder="Your Email"
                className="w-full p-2 outline-none"
              />
            </div>
          </div>

          {/* Password */}
          <div className="mb-6">
            <label className="block font-medium text-gray-700 mb-2">
              Password
            </label>
            <div className="flex items-center border border-gray-300 rounded-md px-2 relative">
              <FaLock className="text-gray-500 mr-2" />
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                value={userData.password}
                onChange={handleChange}
                placeholder="Your Password"
                className="w-full p-2 outline-none"
              />
              <span
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 cursor-pointer text-gray-500"
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </span>
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-[#e31837] text-white py-2 rounded-md font-semibold hover:bg-red-700 transition"
          >
            Login
          </button>

          {/* Footer Link */}
          <p className="text-sm text-center mt-3">
            Don’t have an account?{" "}
            <span
              className="text-[#1570c3] font-medium hover:underline cursor-pointer"
              onClick={() => navigate("/register")}
            >
              Register
            </span>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
