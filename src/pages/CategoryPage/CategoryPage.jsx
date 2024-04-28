import { useLoaderData, useParams } from "react-router-dom";
import CatItem from "./CatItem";

const CategoryPage = () => {
  const crafts = useLoaderData();
  const { name } = useParams();
  return (
    <div className="mt-14">
      <h2 className="  lg:text-3xl font-bold text-center text-[#B08D74]">
        {name}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-14 gap-10">
        {crafts.map((cra, idx) => (
          <CatItem key={idx} cra={cra}></CatItem>
        ))}
      </div>
    </div>
  );
};

export default CategoryPage;
