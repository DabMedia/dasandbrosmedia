import React from "react";

const CustomInput = ({ 
  type = "text",
  placeholder, 
  ...props 
}) => {
  const allowedTypes = ["text", "number", "email", "password"];
  const inputType = allowedTypes.includes(type) ? type : "text";

  return (
    <input
      type={inputType}
      placeholder={placeholder}
      className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-1 focus:ring-teal-100 resize-none"
      {...props}
    />
  );
};

export default CustomInput;
