interface Title {
  type: "max" | "med" | "min";
}

export const Title = ({ type }: Title) => {
  const title = {
    max: "text-4xl",
    med: "text-xl",
    min: "text-lg",
  };
  return (
    <div className="flex items-center gap-2 w-full  ">
      <h3 className={`${title[type]} mb-2`}>D’Brescia </h3>
      <span className="flex items-center py-1 px-2  rounded-full text-xs font-medium bg-yellow-500 text-black">
        Churrascaria
      </span>
    </div>
  );
};
