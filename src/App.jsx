import "./index.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import CategoryCardProduct from "./pages/CategoryCardProduct";
import ProductPage from "./pages/ProductPage";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" index element={<HomePage />} />
          <Route path="/category/:cat" element={<CategoryCardProduct />} />
          <Route path="/product/:sub" element={<ProductPage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
