import { useEffect, useState } from "react";
import Category from "./Category";

const CraftCategory = () => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/categories")
      .then((res) => res.json())
      .then((data) => {
        setCategories(data);
      });
  }, []);
  return (
    <div className="flex flex-col items-center justify-center mt-14">
      <h2 className="text-xl md:text-2xl lg:text-3xl text-center font-bold text-[#B08D74]">
        Explore Our Art & Craft Categories
      </h2>
      <p className="text-gray-600 w-[90%] md:w-[60%] text-center text-xs md:text-lg mt-4">
        Dive into a World of Endless Inspiration and Handcrafted Delights Across
        Our Artisanal Categories
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-10">
        {categories.map((cat, idx) => (
          <Category cat={cat} key={idx}></Category>
        ))}
      </div>
    </div>
  );
};

export default CraftCategory;
