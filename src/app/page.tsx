import { InputText } from "@/components/Form/InputText";
import { Select } from "@/components/Form/Select";
import RestaurantIcon from "@mui/icons-material/Restaurant";
import SearchIcon from "@mui/icons-material/Search";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import SendIcon from "@mui/icons-material/Send";
import { Tabs } from "@/components/Tabs";

async function getData() {
  const res = await fetch(`https://desbravasp.onrender.com/api/banner`);
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default async function Home() {
  const data = await getData();
  console.log();

  return (
    <main className="flex flex-col min-h-screen items-center ">
      <div
        style={{
          background: `url(/banner/${data.image}.png)`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
        className={`h-[750px] w-full flex  items-center justify-center`}
      >
        <div className="flex w-full max-w-7xl ">
          <div className="flex flex-col bg-white   w-full   max-w-xl   rounded-md p-10 gap-2">
            <h1 className="text-3xl text-gray-800">
              Descubra os Melhores{" "}
              <span className=" font-semibold text-[#A20101]">
                Restaurantes, Bares e Lanchonetes
              </span>{" "}
              de São Paulo!
            </h1>
            <form className="flex flex-col gap-4 ">
              <InputText
                name="search"
                label="Buscar"
                icon={<SearchIcon />}
                placeholder="Digite uma comida, restaurante ou local"
              />
              <Select
                name="category"
                label="Categoria"
                icon={<RestaurantIcon />}
                placeholder="Selecione uma categoria"
                options={[
                  "Churrascaria",
                  "Pizzaria",
                  "Comida Brasileira",
                  "Boteco",
                  "Lanchonete",
                  "Hamburgueria",
                  "Restaurante Árabe",
                  "Churrasco Americano",
                  "Cozinha Chilena",
                  "Cozinha Italiana",
                  "Pastelaria",
                  "Sorveteria",
                  "Restaurante Japonês",
                  "Restaurante Mexicano",
                  "Cafeteria",
                  "Padaria",
                  "Restaurante de Frutos do Mar",
                  "Food truck",
                  "Restaurante Vegetariano",
                  "Restaurante Vegano",
                ]}
              />
              <Select
                name="zone"
                label="Zona"
                icon={<LocationOnIcon />}
                placeholder="Selecione Zona"
                options={[
                  "Todas",
                  "Zona Norte",
                  "Zona Leste",
                  "Zona Oeste",
                  "Zona Oeste",
                  "Centro",
                  "ABC",
                ]}
              />
              <button
                type="button"
                className="px-6 py-3.5 text-xl font-medium text-white  items-center bg-[#A20101] hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Buscar
              </button>
            </form>
          </div>
        </div>
      </div>
      <div className="w-full max-w-7xl">
        <Tabs />
      </div>
    </main>
  );
}
