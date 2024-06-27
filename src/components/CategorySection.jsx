import React from "react";
import CategoryCard from "./CategoryCard";
import { useState, useEffect } from "react";
import Spinner from "./Spinner";
const CategorySection = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  useEffect(() => {
    try {
      const fetchData = async () => {
        const res = await fetch("/AllCategories.json");
        if (res) {
          const res1 = await res.json();
          setData(res1);
        }
      };
      fetchData();
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }, []);
  console.log(data);
  return loading ? (
    <div className="flex h-[100vh] justify-center items-center">
      <Spinner />
    </div>
  ) : (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {data.map((category, ind) => (
          <CategoryCard
            key={ind}
            category={category.name}
            link={category.name}
            url={category.image}
            subcategories={category.subcategories}
          />
        ))}
      </div>
    </>
  );
};

export default CategorySection;
