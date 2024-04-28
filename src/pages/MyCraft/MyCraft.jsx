import { useLoaderData } from "react-router-dom";

const MyCraft = () => {
  const loadedCrafts = useLoaderData();
  console.log(loadedCrafts);
  return (
    <div className="mt-10">
      <h2 className="  lg:text-3xl font-bold text-center text-[#B08D74]">
        My Crafts Collection
      </h2>
    </div>
  );
};

export default MyCraft;
