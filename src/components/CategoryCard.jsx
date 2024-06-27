import React from "react";

import { Link } from "react-router-dom";
const CategoryCard = ({ category, link, url }) => {
  return (
    <div>
      <div className="h-[300px] w-[300px] relative transition duration-300 hover:scale-105 border  rounded-lg">
        <Link to={`/category/${link}`}>
          {" "}
          <img
            src={url}
            alt=""
            className="w-full h-full object-cover rounded-lg "
          />
          <p className="absolute bottom-1 right-1 font-bold text-stone-300">
            {category}
          </p>
        </Link>
      </div>
    </div>
  );
};

export default CategoryCard;
