import React, { useState, useEffect } from "react";
import ProductCard from "./ProductCard";
import Spinner from "./Spinner";
const AllProducts = () => {
  const [allProducts, setAllProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 6; // Change this value to adjust the number of products per page
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchAllData = async () => {
      try {
        const res = await fetch("/AllCategories.json");
        if (res.ok) {
          const data = await res.json();
          const flatProducts = flattenCategories(data);
          setAllProducts(flatProducts);
        } else {
          console.error("Failed to fetch data:", res.status);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchAllData();
  }, []);

  const flattenCategories = (categories) => {
    let products = [];

    const traverse = (items) => {
      items.forEach((item) => {
        products.push({ name: item.name, image: item.image });
        if (item.subcategories) {
          traverse(item.subcategories);
        }
      });
    };

    traverse(categories);
    return products;
  };

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = allProducts.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );
  const totalPages = Math.ceil(allProducts.length / productsPerPage);

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return loading ? (
    <div className="flex h-[100vh] justify-center items-center">
      <Spinner />
    </div>
  ) : (
    <div>
      <h1 className="text-center text-4xl font-extrabold text-amber-700 mb-[100px]">
        All Products
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {currentProducts.map((product, index) => (
          <ProductCard
            key={index}
            name={product.name}
            picture={product.image}
          />
        ))}
      </div>
      <div className="flex justify-center mt-8">
        <button
          className="px-4 py-2 mx-2 bg-amber-700 text-white rounded disabled:opacity-50"
          onClick={handlePrevPage}
          disabled={currentPage === 1}
        >
          Previous
        </button>
        <span className="px-4 py-2 mx-2">
          Page {currentPage} of {totalPages}
        </span>
        <button
          className="px-4 py-2 mx-2 bg-amber-700 text-white rounded disabled:opacity-50"
          onClick={handleNextPage}
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default AllProducts;
