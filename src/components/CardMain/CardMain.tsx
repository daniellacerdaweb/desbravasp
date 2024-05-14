import { Money } from "../Money";
import { Star } from "../Star";
import { Title } from "./Title";
import Image from "next/image";
import AccessibleIcon from "@mui/icons-material/Accessible";
import { Button } from "../Form/Button";

export const CardMain = () => {
  return (
    <div className=" w-full max-w-7xl ">
      <div className="grid md:grid-cols-5   gap-6  shadow-inner bg-white p-4 border rounded-lg md:h-80 md:max-h-80">
        <div className="col-span-3 h-80 md:h-auto relative">
          <Image
            className="rounded-md cursor-pointer"
            src="/ad/ad.png"
            layout="fill"
            objectFit="cover"
            alt="Picture of the author"
          />
        </div>
        <div className="col-span-2 ">
          <div className="flex flex-col gap-3">
            <div className="flex items-center justify-between w-full">
              <h3 className={`text-4xl`}>D’Brescia</h3>{" "}
              <div className=" text-white bg-blue-800  rounded-lg">
                <AccessibleIcon className="text-4xl p-1" />
              </div>
            </div>
            <div className="flex">
              <Star /> <Money />
            </div>
            <div className="col-span-2  text-lg">
              Desde 1990 o D’Brescia é uma tradição no ABC Paulista. Situado em
              Santo André, a churrascaria sempre atendeu com requinte e bom
              gosto os mais exigente paladares.
            </div>
            <Button label="Mais Informações" />
            <Button label="Fazer Reserva" variable="secondary" />
          </div>
        </div>
      </div>
    </div>
  );
};
