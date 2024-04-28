import PropTypes from "prop-types";
import { FaRegStar } from "react-icons/fa";
import { Link } from "react-router-dom";
import { MdDelete } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
const CraftCard = ({ craft }) => {
  const { image, Item_name, price, rating, customization, stock } = craft;
  return (
    <div className="flex gap-10 bg-[#F5F5F5] p-6 rounded-2xl">
      <div className="w-[40%] p-4 border-2 border-[#C9B38F] rounded-2xl">
        <img className="rounded-2xl" src={image} alt={Item_name} />
      </div>
      <div className="w-[60%]">
        <div className="space-y-4">
          <h2 className="text-2xl text-[#B08D74]">Name: {Item_name}</h2>
          <h4 className="text-xl">Price: ${price}</h4>
          <ul className="flex items-center gap-10 text-xl">
            <li className="flex items-center gap-2">
              <FaRegStar />
              {rating}
            </li>
            <li>Customized: {customization}</li>
            <li
              className={
                stock == "In Stock" ? "text-green-800" : "text-red-950"
              }
            >
              {stock}
            </li>
          </ul>
        </div>
        <div className="mt-2 flex items-center gap-10">
          <Link>
            <FaEdit className="text-4xl text-yellow-600" />
          </Link>
          <Link>
            <MdDelete className="text-4xl text-red-600" />
          </Link>
        </div>
      </div>
    </div>
  );
};

CraftCard.propTypes = {
  craft: PropTypes.object,
};

export default CraftCard;
