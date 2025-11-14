import { FaLock, FaEye, FaEyeSlash } from "react-icons/fa";

export const InputField = ({ label, icon, ...props }) => (
  <div className="mb-3">
    <label className="text-sm font-medium text-gray-700 mb-1 block">
      {label}
    </label>
    <div className="flex items-center border rounded-md px-2">
      <span className="text-gray-500 mr-2">{icon}</span>
      <input
        {...props}
        className="w-full p-2 outline-none text-sm"
      />
    </div>
  </div>
);

export const PasswordField = ({ label, show, setShow, ...props }) => (
  <div className="mb-3">
    <label className="text-sm font-medium text-gray-700 mb-1 block">
      {label}
    </label>
    <div className="flex items-center border rounded-md px-2 relative">
      <FaLock className="text-gray-500 mr-2 text-sm" />
      <input
        {...props}
        type={show ? "text" : "password"}
        className="w-full p-2 text-sm outline-none"
      />
      <span
        onClick={() => setShow(!show)}
        className="absolute right-3 cursor-pointer text-gray-500"
      >
        {show ? <FaEyeSlash /> : <FaEye />}
      </span>
    </div>
  </div>
);
