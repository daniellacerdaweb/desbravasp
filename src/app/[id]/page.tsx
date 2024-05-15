import { InputText } from "@/components/Form/InputText";
import { Select } from "@/components/Form/Select";
import RestaurantIcon from "@mui/icons-material/Restaurant";
import SearchIcon from "@mui/icons-material/Search";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { Tabs } from "@/components/Tabs";
import { CardMain } from "@/components/CardMain/CardMain";
import { SearchHome } from "@/components/SearchHome";
import { BannerHome } from "@/components/Banner/Home";
import { CardMed } from "@/components/CardMain/CardMed";
import { Star } from "@/components/Star";
import { Money } from "@/components/Money";
import { Button } from "@/components/Form/Button";

async function getData() {
  const res = await fetch(`https://youtubeapp-fb07a.firebaseio.com/items.json`);
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }
  const numeroAleatorio = Math.floor(Math.random() * 6) + 1;

  return numeroAleatorio;
}

export default async function Home() {
  const data = await getData();

  return (
    <main className="flex flex-col items-center min-h-screen  px-1 md:px-0  ">
      <div className="flex  justify-between w-full  max-w-7xl mt-4">
        <h3 className="text-4xl ">D’Brescia</h3>
        <div className="flex">
          <Star /> <Money />
        </div>
      </div>
      <div className="grid  grid-cols-1 md:grid-cols-3 w-full max-w-7xl mt-5 gap-4 ">
        <div className="col-span-2	">
          <div className="flex gap-2 flex-col">
            <div>
              A combinação perfeita de sofisticação, qualidade e tradição. Desde
              1990 o D’Brescia é uma tradição no ABC Paulista. Situado em Santo
              André, a churrascaria sempre atendeu com requinte e bom gosto os
              mais exigente paladares. <br />
              <br />
              Em outubro de 2017, sob novo comando, surge o Novo D’Brescia com a
              proposta de ser ainda mais envolvente e dedicado ao público.{" "}
              <br />
              <br /> O restaurante foi todo repaginado, e agora conta com um
              lounge bar para happy hour, nova arquitetura no salão e ambiente
              agradável. Além disso, a novidade chegou também no cardápio: são
              mais de 20 tipos de carnes nobres, 26 tipos de saladas, 12 tipos
              de pratos quentes, comida japonesa, Carta de Vinhos, Chopp,
              Drinques e Cardápio exclusivo de sobremesas. Sinta este sabor! Vem
              para o Novo D’Brescia!
            </div>{" "}
          </div>
        </div>

        <div>
          <div>
            <div className="flex flex-col gap-2 ">
              <Button label="Instagram" variable="secondary" />
              <Button label="Acessar Site" variable="secondary" />
              <Button label="Ver Localização" variable="secondary" />
              <Button label="Contato" variable="secondary" />
            </div>
          </div>{" "}
        </div>
      </div>

      <div className="max-w-7xl mt-4">
        <div className="grid gap-4">
          <div>
            <img className="h-auto w-full rounded-lg" src="/ad/ad.png" alt="" />
          </div>
          <div className="grid grid-cols-5 gap-4">
            <div>
              <img
                className="h-auto max-w-full rounded-lg"
                src="/ad/ad.png"
                alt=""
              />
            </div>
            <div>
              <img
                className="h-auto max-w-full rounded-lg"
                src="/ad/ad.png"
                alt=""
              />
            </div>
            <div>
              <img
                className="h-auto max-w-full rounded-lg"
                src="/ad/ad.png"
                alt=""
              />
            </div>
            <div>
              <img
                className="h-auto max-w-full rounded-lg"
                src="/ad/ad.png"
                alt=""
              />
            </div>
            <div>
              <img
                className="h-auto max-w-full rounded-lg"
                src="/ad/ad.png"
                alt=""
              />
            </div>
          </div>
        </div>
        <div className="w-full max-w-7xl">
          <h3 className="text-4xl mt-6 border-b-2">Unidades</h3>
          <div className="grid md:grid-cols-4 w-full max-w-7xl mt-5 gap-4 ">
            <div className="text-center">
              UNIDADE 1 <br />
              AV. DOM PEDRO II, 444 <br />
              JARDIM SANTO ANDRÉ SP, 09080-000
              <br />
              RESERVAS: (11) 4436-1263
              <br />
              Abrir com Waze <br />
              Abrir com Google Maps
            </div>
            <div className="text-center">
              UNIDADE 1 <br />
              AV. DOM PEDRO II, 444 <br />
              JARDIM SANTO ANDRÉ SP, 09080-000
              <br />
              RESERVAS: (11) 4436-1263
              <br />
              Abrir com Waze <br />
              Abrir com Google Maps
            </div>
            <div className="text-center">
              UNIDADE 1 <br />
              AV. DOM PEDRO II, 444 <br />
              JARDIM SANTO ANDRÉ SP, 09080-000
              <br />
              RESERVAS: (11) 4436-1263
              <br />
              Abrir com Waze <br />
              Abrir com Google Maps
            </div>
            <div className="text-center">
              UNIDADE 1 <br />
              AV. DOM PEDRO II, 444 <br />
              JARDIM SANTO ANDRÉ SP, 09080-000
              <br />
              RESERVAS: (11) 4436-1263
              <br />
              Abrir com Waze <br />
              Abrir com Google Maps
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
