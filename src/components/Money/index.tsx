import AttachMoneyIcon from "@mui/icons-material/AttachMoney";

export const Money = () => {
  return (
    <div className="flex items-center text-gray-900">
      <AttachMoneyIcon />
      <AttachMoneyIcon />
      <AttachMoneyIcon className="opacity-65" />
    </div>
  );
};
