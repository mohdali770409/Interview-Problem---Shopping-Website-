import React from "react";
import { Link } from "react-router-dom";

const ProductCard = ({ name, price, picture }) => {
  console.log(price);
  return (
    <div className="h-[400px] w-[300px] bg-green-50 rounded-xl hover:bg-green-100 cursor-pointer transition duration-200 hover:scale-105 border">
      <Link to={`/product/${name}`}>
        <div className="w-full h-full  flex flex-col  justify-center items-center rounded-xl">
          <div className="w-[250px] h-[300px] mt-3 ">
            <img
              src={`${picture}`}
              className="object-cover w-full h-full rounded-lg"
              alt=""
            />
            <p className="text-xl font-bold">{name}</p>
          </div>

          {price && (
            <div className="ml-[200px] text-lg font-semibold text-sky-800">
              ₹{price}
            </div>
          )}
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;
