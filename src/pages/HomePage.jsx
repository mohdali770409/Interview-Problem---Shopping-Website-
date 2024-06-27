import CategorySection from "../components/CategorySection";
import AllProducts from "../components/AllProducts";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import TypeAhead from "../components/Typeahead";
const HomePage = () => {
  return (
    <div>
      <div>
        <Navbar />
        <TypeAhead />
      </div>
      <div className="p-10 flex justify-center"></div>

      <h1 className="text-center text-amber-700 font-extrabold text-4xl">
        Categories
      </h1>
      <div className="p-10 flex justify-center mx-auto">
        {" "}
        <CategorySection />
      </div>
      <div className="p-10 mx-auto flex justify-center items-center">
        <AllProducts />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default HomePage;
