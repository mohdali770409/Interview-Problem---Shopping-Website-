import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const TypeAhead = () => {
  const [data, setData] = useState([]);
  const categories = [
    "Electronic",
    "Fashion",
    "Home & Kitchen",
    "Books",
    "Sports & Outdoors",
  ];
  const checkCategory = (category) => {
    return categories.includes(category);
  };
  useEffect(() => {
    const fetchAllData = async () => {
      try {
        const res = await fetch("/AllCategories.json");
        if (res) {
          const dataa = await res.json();
          setData(dataa);
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchAllData();
  }, []);
  const [query, setQuery] = useState("");
  const [filteredResults, setFilteredResults] = useState([]);

  const handleInputChange = (e) => {
    const value = e.target.value.toLowerCase();
    setQuery(value);

    if (value.length === 0) {
      setFilteredResults([]);
      return;
    }

    const results = [];

    const searchInCategories = (categories) => {
      for (let category of categories) {
        if (category.name.toLowerCase().includes(value)) {
          results.push(category);
        }
        if (category.subcategories) {
          searchInCategories(category.subcategories);
        }
      }
    };

    searchInCategories(data);
    setFilteredResults(results);
  };

  return (
    <div className="p-4">
      <input
        type="text"
        value={query}
        onChange={handleInputChange}
        placeholder="Search..."
        className="w-full p-2 border rounded"
      />
      {filteredResults.length > 0 && (
        <ul className="mt-2 border rounded">
          {filteredResults.map((item, index) => (
            <li key={index} className="p-2 border-b last:border-none">
              <img
                src={item.image}
                alt={item.name}
                className="w-12 h-12 inline-block mr-2"
              />

              { checkCategory(item.name)?<Link to={`/category/${item.name}`}>{item.name}</Link>:<Link to={`/product/${item.name}`}>{item.name}</Link>
              }
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default TypeAhead;
