import PropTypes from "prop-types";
import { FaRegStar } from "react-icons/fa";
import { Link } from "react-router-dom";
import { MdDelete } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import Swal from "sweetalert2";
const CraftCard = ({ craft, setCrafts, crafts }) => {
  const { image, Item_name, price, rating, customization, stock, _id } = craft;
  const handleDelte = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://craftyfiber-server.vercel.app/craft/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Your craft item has been deleted.",
                icon: "success",
              });
              const remaining = crafts.filter((crf) => crf._id != _id);
              setCrafts(remaining);
            }
          });

        console.log(id);
      }
    });
  };
  return (
    <div className="flex flex-col md:flex-row gap-10 bg-[#F5F5F5] p-6 rounded-2xl">
      <div className="md:w-[40%] p-4 border-2 border-[#C9B38F] rounded-2xl">
        <img className="rounded-2xl" src={image} alt={Item_name} />
      </div>
      <div className="md:w-[60%]">
        <div className="space-y-4">
          <h2 className="text-xl md:text-2xl text-[#B08D74]">
            Name: {Item_name}
          </h2>
          <h4 className="text-xl">Price: ${price}</h4>
          <ul className="flex items-center gap-10 text-xs md:text-xl">
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
        <div className="mt-2 flex items-center  gap-10">
          <Link to={`/dcraft/${_id}`}>
            <FaEdit className="text-2xl md:text-4xl text-yellow-600" />
          </Link>
          <button onClick={() => handleDelte(_id)}>
            <MdDelete className="text-2xl md:text-4xl text-red-600" />
          </button>
        </div>
      </div>
    </div>
  );
};

CraftCard.propTypes = {
  craft: PropTypes.object,
  crafts: PropTypes.array,
  setCrafts: PropTypes.func,
};

export default CraftCard;
