import Navbar from "./components/Navbar";
import ProductCard from "./components/ProductCard";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CartPage from "./components/CartPage";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<ProductCard />} />
        <Route path="/cartpage" element={<CartPage />} />
      </Routes>
    </Router>
  );
}

export default App;
