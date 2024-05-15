import { InputText } from "@/components/Form/InputText";
import { Select } from "@/components/Form/Select";
import { SearchHome } from "@/components/SearchHome";
import RestaurantIcon from "@mui/icons-material/Restaurant";
import SearchIcon from "@mui/icons-material/Search";
import LocationOnIcon from "@mui/icons-material/LocationOn";

interface BannerHome {
  image: string;
  type?: boolean;
}
export const BannerHome = ({ image, type = true }: BannerHome) => {
  if (type) {
    return (
      <>
        <div className="md:hidden">
          <img src={`/banner/${image}.png`} />
        </div>
        <div
          style={{
            background: `url(/banner/${image}.png)`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
          }}
          className={`md:h-48  w-full flex  items-center justify-center`}
        >
          <div className="flex w-full  max-w-7xl bg-white md:rounded-xl">
            <form className=" flex flex-wrap md:flex-nowrap  w-full gap-4 p-4">
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
              <a
                href=""
                className=" w-full md:max-w-full px-6 py-3.5 text-xl font-medium text-white  items-center bg-primary-500 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                <button
                  type="button"
                  className=" w-full md:max-w-full px-6 py-3.5 text-xl font-medium text-white  items-center bg-primary-500 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Buscar
                </button>
              </a>
            </form>
          </div>
        </div>
      </>
    );
  }
  return (
    <>
      <div className="md:hidden">
        <img src={`/banner/${image}.png`} />
      </div>
      <div
        style={{
          background: `url(/banner/${image}.png)`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
        className={`md:h-[750px] w-full flex  items-center justify-center`}
      >
        <div className="flex w-full max-w-7xl">
          <SearchHome />
        </div>
      </div>
    </>
  );
};
