interface InputText {
  name: string;
  label: string;
  placeholder?: string;
  required?: boolean;
  icon: React.ReactNode;
}
export const InputText = ({
  name,
  label,
  placeholder,
  required,
  icon,
}: InputText) => {
  return (
    <div className=" border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
      <label
        htmlFor={name}
        className="block mb-2 text-xl font-medium text-gray-900 dark:text-white"
      >
        {icon} {label}
      </label>
      <input
        type="text"
        id={name}
        className=" text-xl w-full"
        placeholder={placeholder}
        required={required}
      />
    </div>
  );
};
