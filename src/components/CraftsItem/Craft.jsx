import PropTypes from "prop-types";

const Craft = ({ craft }) => {
  const {
    image,
    Item_name,
    category,
    price,
    rating,
    customization,
    processing_time,
    name,
    email,
    stock,
    short_description,
  } = craft;
  return (
    <div className="p-6 border-2 border-[#C9B38F] rounded-2xl bg-[#F5F5F5]">
      <img
        className=" rounded-2xl border-2 border-[#C9B38F]"
        src={image}
        alt={name}
      />
      <h1 className="text-2xl font-bold text-[#7e583c] mt-4">{Item_name}</h1>
      <h4 className="mt-2">{category}</h4>
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
        <button className="btn bg-[#B08D74]">View Details</button>
      </div>
    </div>
  );
};

Craft.propTypes = {
  craft: PropTypes.object,
};

export default Craft;
