import { SearchHome } from "@/components/SearchHome";

interface BannerHome {
  image: string;
}
export const BannerHome = ({ image }: BannerHome) => {
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
