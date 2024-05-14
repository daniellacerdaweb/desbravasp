import { InputText } from "@/components/Form/InputText";
import { Select } from "@/components/Form/Select";
import RestaurantIcon from "@mui/icons-material/Restaurant";
import SearchIcon from "@mui/icons-material/Search";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { Tabs } from "@/components/Tabs";
import { Highlight } from "@/components/AdHome/Highlight";
import { SearchHome } from "@/components/SearchHome";
import { BannerHome } from "@/components/Banner/Home";

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
    <main className="flex flex-col min-h-screen items-center ">
      <BannerHome image={`${data}`} />
      <div className="w-full max-w-7xl">
        <Tabs />
      </div>
      <div className="px-2 md:px-0 flex  w-full max-w-7xl">
        <Highlight type="max" />
      </div>
      <div className="px-2 md:px-0 flex md:flex-wrap  w-full max-w-7xl gap-2">
        <Highlight type="med" />
        <Highlight type="med" />
        <Highlight type="med" />
        <Highlight type="med" />
      </div>
    </main>
  );
}
