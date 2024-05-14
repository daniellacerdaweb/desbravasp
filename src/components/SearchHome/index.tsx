import { InputText } from "../Form/InputText";
import { Select } from "../Form/Select";
import RestaurantIcon from "@mui/icons-material/Restaurant";
import SearchIcon from "@mui/icons-material/Search";
import LocationOnIcon from "@mui/icons-material/LocationOn";

export const SearchHome = () => {
  return (
    <div className="flex flex-col bg-white  w-full max-w-xl  p-4 md:rounded-md md:p-10 gap-2">
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
  );
};
