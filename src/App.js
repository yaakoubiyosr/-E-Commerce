import { Route, Routes } from "react-router-dom";
import "./App.css";
import Nav from "./components/Nav";
import Products from "./pages/Products";
import Home from "./pages/Home";
import Marque from "./components/Marquee";
import SingleProduct from "./pages/SingleProduct";
import Footer from "./components/Footer";
import About from "./pages/About";
import Contact from "./pages/Contact";
function App() {
  return (
    <div className="App">
      <Marque />
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />

        <Route path="/singleProduct/:item" element={<SingleProduct />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
