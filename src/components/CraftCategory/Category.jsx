import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Category = ({ cat }) => {
  const { image, category, information } = cat;
  return (
    <Link to={`/category/${category}`}>
      <div className=" 5 bg-[#F5F5F5] p-6 rounded-2xl space-y-4 border-2 border-[#C9B38F]">
        <img className=" rounded-2xl" src={image} alt={category} />
        <h2 className="text-3xl font-bold text-[#B08D74]">{category}</h2>
        <p> {information} </p>
      </div>
    </Link>
  );
};

Category.propTypes = {
  cat: PropTypes.object,
};

export default Category;
