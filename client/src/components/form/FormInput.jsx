import React from "react";

const FormInput = ({ type, label, placeholder, value, onChange }) => {
  return (
    <label className="w-full">
      <span className="text-xl text-black font-semibold block">{label}*</span>
      {type === "textarea" ? (
        <textarea
          className="w-full p-4 rounded-lg bg-black text-white outline-none placeholder-white resize-none"
          placeholder={placeholder}
          onChange={onChange}
          value={value}
          rows="5"
          spellCheck="false"
        />
      ) : (
        <input
          className="w-full p-4 rounded-lg bg-black text-white outline-none placeholder-white resize-none"
          placeholder={placeholder}
          onChange={onChange}
          type={type}
          value={value}
          step={0.1}
          min={0.1}
          spellCheck="false"
        />
      )}
    </label>
  );
};

export default FormInput;
