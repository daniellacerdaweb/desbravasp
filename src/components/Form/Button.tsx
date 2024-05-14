interface Button {
  label: string;
  variable?: "primary" | "secondary";
}
export const Button = ({ label, variable }: Button) => {
  if (variable === "secondary") {
    return (
      <button className="text-xl text-primary-500  hover:bg-primary-50  font-semibold py-2 px-4 rounded-lg border-primary-500  border-2">
        {label}
      </button>
    );
  }
  return (
    <button className="text-xl bg-primary-500 hover:bg-primary-700 text-white font-semibold py-2 px-4 rounded-lg">
      {label}
    </button>
  );
};
