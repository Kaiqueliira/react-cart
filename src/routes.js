import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Navigation from "./components/navigation/Navigation";
import Cart from "./pages/Cart";
import Products from "./pages/Products";

const RoutesDefault = () => {
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} exact></Route>
      </Routes>
      <Routes>
        <Route path="/about" element={<About />}></Route>
      </Routes>
      <Routes>
        <Route path="/products" element={<Products />}></Route>
      </Routes>
      <Routes>
        <Route path="/cart" element={<Cart />}></Route>
      </Routes>
    </Router>
  );
};

export default RoutesDefault;
