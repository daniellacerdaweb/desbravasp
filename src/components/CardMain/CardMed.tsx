import { Money } from "../Money";
import { Star } from "../Star";
import { Title } from "./Title";
import Image from "next/image";
import AccessibleIcon from "@mui/icons-material/Accessible";
import { Button } from "../Form/Button";

const teste = (
  <div className="grid md:grid-rows-2 shadow-md p-4 border rounded-lg ">
    <div className="col-span-3 ">
      <div className="flex flex-col gap-3">
        <div className="flex items-center justify-between w-full">
          <h3 className={`text-4xl`}>D’Brescia</h3>{" "}
          <div className=" text-white bg-blue-800  rounded-lg">
            <AccessibleIcon className="text-4xl p-1" />
          </div>
        </div>

        <div className="col-span-2  text-lg">
          Desde 1990 o D’Brescia é uma tradição no ABC Paulista. Situado em
          Santo André, a churrascaria sempre atendeu com requinte e bom gosto os
          mais exigente paladares.
        </div>
        <Button label="Mais Informações" />
        <Button label="Fazer Reserva" variable="secondary" />
      </div>
    </div>
  </div>
);
export const CardMed = () => {
  return (
    <div className="shadow-inner bg-white border px-3 py-2 rounded-lg cursor-pointer">
      <div className="flex flex-col gap-2">
        <h3 className="text-2xl">D’Brescia</h3>{" "}
        <div className="flex">
          <Star /> <Money />
        </div>
        <Image
          className="rounded-md "
          src="/ad/ad.png"
          width={500}
          height={500}
          alt="Picture of the author"
        />
        <div className="col-span-2  text-lg">
          Desde 1990 o D’Brescia é uma tradição no ABC Paulista. Situado em
          Santo André, a churrascaria sempre atendeu com requinte e bom gosto os
          mais exigente paladares.
        </div>
      </div>
    </div>
  );
};
