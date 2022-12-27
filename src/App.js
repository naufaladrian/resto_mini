import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import RestoNavBar from "./component/RestoNavBar";
import Product from "./pages/Product";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "./component/Footer.js";
function App() {
  return (
    <>
      <BrowserRouter>
        <RestoNavBar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product" element={<Product />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
