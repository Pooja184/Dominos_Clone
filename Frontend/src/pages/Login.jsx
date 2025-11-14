import React, { useState } from "react";
import { useDispatch } from "react-redux";
import api from "../axios/axiosConfig.js";
import { loginSuccess } from "../redux/features/authSlice";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { FaEnvelope, FaLock, FaEye, FaEyeSlash } from "react-icons/fa";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);

  const [cred, setCred] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) =>
    setCred({ ...cred, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await api.post("/auth/login", cred);

      if (res.data.success) {
        dispatch(loginSuccess(res.data.user)); // save user in redux
        toast.success("Login Successful!");
        navigate("/");
      } else {
        toast.error(res.data.message);
      }
    } catch (err) {
      toast.error(err.response?.data?.message || "Invalid Credentials");
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F5EFE6]">
      <header className="bg-[#1570c3] h-20 flex items-center justify-center shadow-md">
        <p className="text-white text-2xl md:text-3xl font-[Bebas_Neue]">
          Order Online With Auburn Domino's Pizza!
        </p>
      </header>

      <div className="flex flex-1 justify-center items-center px-4">
        <form
          onSubmit={handleSubmit}
          className="bg-white border-2 border-[#1570c3] rounded-lg shadow-lg p-6 w-full max-w-sm"
        >
          <h2 className="text-center text-2xl font-semibold mb-5 text-gray-800">
            Login
          </h2>

          {/* Email */}
          <div className="mb-3">
            <label className="block mb-1 text-gray-700">Email</label>
            <div className="flex items-center border rounded-md px-2">
              <FaEnvelope className="text-gray-500 mr-2" />
              <input
                type="email"
                name="email"
                value={cred.email}
                onChange={handleChange}
                placeholder="Enter Email"
                className="w-full p-2 outline-none"
              />
            </div>
          </div>

          {/* Password */}
          <div className="mb-4">
            <label className="block mb-1 text-gray-700">Password</label>
            <div className="flex items-center border rounded-md px-2 relative">
              <FaLock className="text-gray-500 mr-2" />

              <input
                type={showPassword ? "text" : "password"}
                name="password"
                value={cred.password}
                onChange={handleChange}
                placeholder="Enter Password"
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

          {/* Submit */}
          <button
            type="submit"
            className="w-full bg-[#e31837] text-white py-2 rounded-md font-semibold hover:bg-red-700 transition"
          >
            Login
          </button>

          <p className="text-sm text-center mt-3">
            New user?{" "}
            <span
              onClick={() => navigate("/register")}
              className="text-[#1570c3] hover:underline cursor-pointer"
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
