import React from "react";
export type SearchInputProsp = {
  label: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const SearchInput = ({ label, onChange }: SearchInputProsp) => {
  return (
    <>
      <label className="text-white">{label}</label>
      <div className="flex items-start justify-start">
        <input
          className="transition-all duration-300 border-2 border-slate-300 rounded-lg p-2 focus:border-blue-500 focus:outline-none"
          placeholder="Search ... "
          onChange={onChange}
        />
      </div>
    </>
  );
};

export default SearchInput;
