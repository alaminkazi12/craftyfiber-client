import { useLoaderData } from "react-router-dom";
import CraftCard from "./CraftCard";
import { useState } from "react";

const MyCraft = () => {
  const loadedCrafts = useLoaderData();
  const [crafts, setCrafts] = useState(loadedCrafts);

  if (crafts.length == 0) {
    return (
      <h2 className="  lg:text-3xl font-bold text-center text-[#B08D74] mt-20">
        No Craft Added
      </h2>
    );
  }

  return (
    <div className="mt-10">
      <h2 className="  lg:text-3xl font-bold text-center text-[#B08D74]">
        My Crafts Collection
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 mt-16 gap-4">
        {crafts.map((craft, idx) => (
          <CraftCard
            key={idx}
            craft={craft}
            crafts={crafts}
            setCrafts={setCrafts}
          ></CraftCard>
        ))}
      </div>
    </div>
  );
};

export default MyCraft;
