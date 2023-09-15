import { BrowserRouter } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import Eletronic from "./Product/Eletronic/index";
import Product from "./Product";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Product />} />
        <Route path="/products/electronics" element={<Eletronic />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
