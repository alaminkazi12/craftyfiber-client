import { useLoaderData } from "react-router-dom";
import GCard from "./GCard";

const Gallery = () => {
  const crafts = useLoaderData();
  return (
    <div className="mt-14">
      <h2 className="  lg:text-3xl font-bold text-center text-[#B08D74]">
        All Art & Craft Collection
      </h2>
      <div>
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th>
                  <label>
                    <input type="checkbox" className="checkbox" />
                  </label>
                </th>
                <th>Item Name</th>
                <th>Basic Info</th>
                <th>Stock Status</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}

              {crafts.map((craft) => (
                <GCard craft={craft} key={craft._id}></GCard>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
