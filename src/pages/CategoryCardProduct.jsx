import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProductCard from "../components/ProductCard";
import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import FooterCom from "../components/Footer";
import Spinner from "../components/Spinner";
const CategoryCardProduct = () => {
  const { cat } = useParams();
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/");
  };

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch("/AllCategories.json");
        if (res) {
          const data = await res.json();
          setProducts(data);
        }
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);
  useEffect(() => {
    if (cat) {
      setFilteredProducts(products.filter((product) => product.name === cat));
    } else {
      setFilteredProducts(products);
    }
  }, [cat, products]);
  console.log(products);
  console.log(filteredProducts);
  const subcategories =
    filteredProducts.length > 0 ? filteredProducts[0].subcategories : [];

  console.log("subcategories", subcategories);
  return loading ? (
    <div className="flex h-[100vh] justify-center items-center">
      <Spinner />
    </div>
  ) : !subcategories || !subcategories.length > 0 ? (
    <div className="flex justify-center items-center h-[100vh]">
      <p className="text-3xl font-bold text-amber-400 ">No Product Found</p>
    </div>
  ) : (
    <>
      <Navbar />
      <div className="relative">
        <button
          onClick={handleClick}
          className="text-blue-600  absolute top-2 left-10 text-xl"
        >
          <FaArrowLeft className="inline mr-2 mb-1 " />
          Go back
        </button>
        <h1 className="text-3xl pl-[30px] text-amber-600 text-center capitalize font-extrabold pt-10">
          {cat} Products
        </h1>
      </div>

      <div className="flex justify-center space-x-4 pt-5 pb-10 ">
        <div className="p-2 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 ">
          {subcategories &&
            subcategories.map((subcategory, ind) => (
              <ProductCard
                key={ind}
                name={subcategory.name}
                picture={subcategory.image}

                // name={filteredProduct.name}
                // price={filteredProduct.price}
              />
            ))}
        </div>
      </div>
      <FooterCom />
    </>
  );
};

export default CategoryCardProduct;
