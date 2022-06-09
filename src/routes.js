import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";

const RoutesDefault = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} exact></Route>
      </Routes>
      <Routes>
        <Route path="/about" element={<About />}></Route>
      </Routes>
    </Router>
  );
};

export default RoutesDefault;
