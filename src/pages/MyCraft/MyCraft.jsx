import { useLoaderData } from "react-router-dom";
import CraftCard from "./CraftCard";
import { useState } from "react";
import { Helmet } from "react-helmet";

const MyCraft = () => {
  const loadedCrafts = useLoaderData();
  const [crafts, setCrafts] = useState(loadedCrafts);

  const sortBy = (value) => {
    const shortedCrafts = loadedCrafts.filter(
      (craft) => craft.customization == value
    );
    setCrafts(shortedCrafts);
  };

  if (crafts.length == 0) {
    return (
      <h2 className="  lg:text-3xl font-bold text-center text-[#B08D74] mt-20">
        No Craft Added
      </h2>
    );
  }

  return (
    <div className="mt-10">
      <Helmet>
        <title>MyCraft | CraftyFiber.com</title>
      </Helmet>
      <h2 className="  lg:text-3xl font-bold text-center text-[#B08D74]">
        My Crafts Collection
      </h2>
      <div className="flex justify-center mt-10">
        <details className="dropdown">
          <summary className="m-1 btn text-xl">Customization</summary>
          <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
            <li onClick={() => sortBy("yes")}>
              <a>Yes</a>
            </li>
            <li onClick={() => sortBy("no")}>
              <a>No</a>
            </li>
          </ul>
        </details>
      </div>
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
