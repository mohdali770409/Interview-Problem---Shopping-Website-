import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Spinner from "./Spinner";
const Navbar = () => {
  const [data, setData] = useState([]);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAllData = async () => {
      try {
        const res = await fetch("/AllCategories.json");
        if (res.ok) {
          const dataa = await res.json();
          setData(dataa);
        }
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    fetchAllData();
  }, []);

  const handleMouseEnter = (category) => {
    setActiveCategory(category);
  };

  const handleMouseLeave = () => {
    setActiveCategory(null);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return loading ? (
    <div className="flex h-[100vh] justify-center items-center">
      <Spinner />
    </div>
  ) : (
    <nav className="bg-amber-700 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/">
          {" "}
          <div className="text-xl font-bold">E-Commerce</div>
        </Link>
        <div className="md:hidden">
          <button onClick={toggleMobileMenu} className="focus:outline-none">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>
        <ul
          className={`md:flex space-x-4 ${
            isMobileMenuOpen ? "block" : "hidden"
          } md:block`}
        >
          {data.map((category, index) => (
            <li
              key={index}
              className="relative"
              onMouseEnter={() => handleMouseEnter(category.name)}
              onMouseLeave={handleMouseLeave}
            >
              <Link to={`/category/${category.name}`}>
                <span className="cursor-pointer pb-8">{category.name}</span>
              </Link>
              {activeCategory === category.name && (
                <div className="absolute left-0 top-full mt-2 bg-white text-black p-4 shadow-lg">
                  <ul>
                    {category.subcategories.map((subcategory, subIndex) => (
                      <li key={subIndex} className="relative group">
                        <Link to={`/product/${subcategory.name}`}>
                          <span className="cursor-pointer w-full p-[20px]">
                            {subcategory.name}
                          </span>
                        </Link>
                        {subcategory.subcategories && (
                          <div className="absolute left-full mt-2 ml-2  bg-white text-black p-4 shadow-lg hidden group-hover:block">
                            <ul>
                              {subcategory.subcategories.map(
                                (subSubcategory, subSubIndex) => (
                                  <li
                                    key={subSubIndex}
                                    className="relative group"
                                  >
                                    <span className="cursor-pointer ">
                                      {subSubcategory.name}
                                    </span>
                                  </li>
                                )
                              )}
                            </ul>
                          </div>
                        )}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
