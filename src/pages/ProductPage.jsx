import React from "react";
import { useState, useEffect } from "react";
import ProductCard from "../components/ProductCard";
import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import FooterCom from "../components/Footer";
import Spinner from "../components/Spinner";
const ProductPage = () => {
  const { sub } = useParams();
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  console.log(sub);
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
  console.log(products);

  useEffect(() => {
    if (sub && products.length > 0) {
      // Filter products based on the subcategory parameter
      const filtered = products.filter((category) =>
        category.subcategories
          ? category.subcategories.some(
              (subcategory) => subcategory.name === sub
            )
          : false
      );
      setFilteredProducts(filtered);
    } else {
      setFilteredProducts(products); // Set all products initially
    }
  }, [sub, products]);
  //   console.log("filtered products", filteredProducts);

  let subcategories =
    filteredProducts.length > 0 ? filteredProducts[0].subcategories : [];

  console.log("subcategories", subcategories);

  return loading ? (
    <div className="flex h-[100vh] justify-center items-center">
      <Spinner />
    </div>
  ) : !subcategories || !subcategories.length > 0 ? (
    <div className="flex justify-center items-center h-[100vh]">
      <p className="text-3xl font-bold text-amber-800 ">No Product Found</p>
    </div>
  ) : (
    <>
      <Navbar />
      <h1 className="text-3xl text-amber-600 text-center capitalize font-extrabold mt-10">
        {sub} Products
      </h1>
      <div className="flex justify-center space-x-4 pt-5 pb-10">
        <div className="p-2 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 ">
          {subcategories &&
            subcategories.map(
              (subcategory) =>
                subcategory.name === sub &&
                subcategory?.subcategories?.map((subsubcategory, ind) => (
                  <ProductCard
                    key={ind}
                    name={subsubcategory.name}
                    picture={subsubcategory.image}
                    price={subsubcategory.price}
                    // name={filteredProduct.name}
                    // price={filteredProduct.price}
                  />
                ))
            )}
        </div>
      </div>
      <FooterCom />
    </>
  );
};

export default ProductPage;
