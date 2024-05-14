import { Money } from "../Money";
import { Star } from "../Star";
import { Title } from "./Title";

interface Highlight {
  type: "max" | "med" | "min";
}

export const Highlight = ({ type }: Highlight) => {
  const title = {
    max: <Title type="max" />,
    med: <Title type="med" />,
    min: <Title type="min" />,
  };

  return (
    <div className="mt-8 w-full max-w-7xl ">
      <div className="flex justify-between w-full">{title[type]}</div>
      <div className="relative w-full ">
        <div className="absolute bg-slate-200 p-2 bg-opacity-75  w-auto flex gap-8 rounded-br-lg">
          <Star /> <Money />
        </div>
        <img src="/ad/ad.png" style={{ width: "100%" }} />
      </div>
    </div>
  );
};
