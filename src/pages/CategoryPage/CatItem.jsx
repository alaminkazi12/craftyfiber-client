import PropTypes from "prop-types";
import { Link } from "react-router-dom";
const CatItem = ({ cra }) => {
  const {
    image,
    Item_name,
    category,
    price,
    name,
    stock,
    short_description,
    _id,
  } = cra;
  return (
    <div className="p-6 border-2 border-[#C9B38F] rounded-2xl bg-[#F5F5F5]">
      <img
        className=" rounded-2xl border-2 border-[#C9B38F]"
        src={image}
        alt={name}
      />
      <h1 className="text-2xl font-bold text-[#7e583c] mt-4">{Item_name}</h1>
      <h4 className="mt-2 text-xl">{category}</h4>
      <p className=" mt-2"> {short_description.slice(0, 90)} ... </p>
      <div className="flex justify-between items-center mt-4">
        <p className="text-2xl font-bold flex items-center">$ {price}</p>
        <p>
          <span
            className={
              stock == "In Stock" ? "text-green-600" : "text-yellow-900"
            }
          >
            {stock}
          </span>
        </p>
      </div>
      <div className="flex justify-end items-end mt-4">
        <Link to={`/craft/${_id}`}>
          <button className="btn bg-[#B08D74]">View Details</button>
        </Link>
      </div>
    </div>
  );
};

CatItem.propTypes = {
  cra: PropTypes.object,
};

export default CatItem;
