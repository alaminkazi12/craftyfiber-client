import { useLoaderData } from "react-router-dom";
import Craft from "../../components/CraftsItem/Craft";

const Shop = () => {
  const crafts = useLoaderData();
  return (
    <div>
      <h2 className=" mt-14 lg:text-3xl font-bold text-center text-[#B08D74]">
        Shop
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-10">
        {crafts.map((craft, idx) => (
          <Craft craft={craft} key={idx}></Craft>
        ))}
      </div>
    </div>
  );
};

export default Shop;
