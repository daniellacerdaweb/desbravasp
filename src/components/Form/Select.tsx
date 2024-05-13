"use client";

interface Select {
  name: string;
  label: string;
  placeholder?: string;
  required?: boolean;
  icon: React.ReactNode;
  options: string[];
}

import { useRef } from "react";
export const Select = ({
  name,
  label,
  placeholder,
  required,
  icon,
  options,
}: Select) => {
  const selectRef = useRef<HTMLSelectElement | null>(null);

  return (
    <div className=" border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
      <label
        htmlFor={name}
        className="block mb-2 text-xl font-medium text-gray-900 dark:text-white"
      >
        {icon} {label}
      </label>
      <div className="flex">
        <select
          ref={selectRef}
          required={required}
          id={name}
          className="appearance-none   text-xl  w-full "
          style={{
            backgroundRepeat: "no-repeat",
            backgroundPositionX: "right",
            backgroundSize: "35px",
            backgroundPositionY: "-5px",
            backgroundImage: `url("data:image/svg+xml;utf8,<svg fill='black' height='24' viewBox='0 0 24 24' width='24' xmlns='http://www.w3.org/2000/svg'><path d='M7 10l5 5 5-5z'/><path d='M0 0h24v24H0z' fill='none'/></svg>`,
          }}
        >
          <option selected>{placeholder}</option>
          {options.map((option, key) => {
            return (
              <option value={option} key={key}>
                {option}
              </option>
            );
          })}
        </select>
      </div>
    </div>
  );
};
