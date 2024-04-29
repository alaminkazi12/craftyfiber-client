import PropTypes from "prop-types";
import Craft from "./Craft";

const CraftsItem = ({ crafs }) => {
  const updatedCraft = crafs.slice(0, 6);
  return (
    <div className="flex flex-col items-center justify-center mt-14 space-y-4">
      <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-[#B08D74]">
        Crafty Creations Galore
      </h2>
      <p className="text-gray-600 w-[90%] md:w-[60%] text-center text-xs md:text-lg ">
        Embark on a Journey of Creativity and Inspiration as You Explore a Vast
        Collection of Handcrafted Wonders Across Every Category of Textile Arts
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {updatedCraft.map((craft, idx) => (
          <Craft key={idx} craft={craft}></Craft>
        ))}
      </div>
    </div>
  );
};

CraftsItem.propTypes = {
  crafs: PropTypes.array,
};
export default CraftsItem;
