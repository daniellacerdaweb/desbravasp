import StarIcon from "@mui/icons-material/Star";

export const Star = () => {
  return (
    <div className="flex items-center text-gray-900">
      <StarIcon />
      <StarIcon />
      <StarIcon />
      <StarIcon />
      <StarIcon className=" opacity-65" />
    </div>
  );
};
