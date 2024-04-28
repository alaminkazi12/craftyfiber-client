import { useLoaderData } from "react-router-dom";
import { FcRating } from "react-icons/fc";

const CraftDetail = () => {
  const loadedCraft = useLoaderData();
  const {
    image,
    Item_name,
    category,
    price,
    rating,
    customization,
    processing_time,
    stock,
    short_description,
  } = loadedCraft;
  return (
    <div>
      <h2 className="text-3xl font-bold text-[#B08D74] text-center mt-14">
        Detailed OverView Of {Item_name}
      </h2>
      <div className="mt-10 md:flex justify-between gap-10 rounded-2xl">
        <div className="md:w-1/2">
          <img className="rounded-2xl" src={image} alt={Item_name} />
        </div>
        <div className="md:w-1/2 space-y-3 p-6 border-2 rounded-2xl border-[#C9B38F]">
          <h1 className="text-4xl text-[#835635] font-bold">
            Item Name: {Item_name}
          </h1>
          <h4 className="text-xl">
            {" "}
            <b>Category:</b> {category}
          </h4>
          <p className="w-[80%]">
            <b>Description:</b> {short_description}
          </p>
          <p className="text-2xl font-bold text-[#B08D74]">${price}</p>
          <div className="p-6 bg-[#F5F5F5] rounded-xl border-2 border-[#C9B38F]">
            <ul className="flex items-center gap-10 text-xl">
              <li className="flex items-center gap-2">
                {" "}
                <FcRating /> {rating}
              </li>
              <li>
                Status:{" "}
                <span
                  className={
                    stock == "In Stock" ? "text-green-600" : "text-yellow-900"
                  }
                >
                  {stock}
                </span>
              </li>
            </ul>
            <ul className="flex items-center gap-10 text-xl">
              <li>
                <b>Customized:</b> {customization}
              </li>
              <li>
                <b>Processing Time: </b>
                {processing_time}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CraftDetail;
