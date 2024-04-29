import PropTypes from "prop-types";
import { FaRegStar } from "react-icons/fa";
import { Link } from "react-router-dom";

const GCard = ({ craft }) => {
  const {
    image,
    Item_name,
    category,
    price,
    rating,
    customization,
    processing_time,
    _id,
    stock,
  } = craft;
  return (
    <tr>
      <th>
        <label>
          <input type="checkbox" className="checkbox" />
        </label>
      </th>
      <td>
        <div className="flex items-center gap-3">
          <div className="avatar">
            <div className="mask mask-squircle w-12 h-12">
              <img src={image} alt={Item_name} />
            </div>
          </div>
          <div>
            <div className="font-bold">Hart Hagerty</div>
            <div className="text-sm opacity-50">{category}</div>
          </div>
        </div>
      </td>
      <td>
        <span className="font-bold">Processing Time:</span> {processing_time}
        <span className="font-bold ml-2">Price: ${price} </span> <br />
        <span className="flex items-center">
          <span>
            <b>Customization:</b> {customization}
          </span>
          <span className="badge badge-ghost badge-sm ml-4 flex items-center gap-1">
            <FaRegStar /> {rating}
          </span>
        </span>
      </td>
      <td>{stock}</td>
      <th>
        <Link to={`/craft/${_id}`}>
          <button className="btn btn-xs text-[#B08D74]"> View details</button>
        </Link>
      </th>
    </tr>
  );
};

GCard.propTypes = {
  craft: PropTypes.object,
};
export default GCard;
