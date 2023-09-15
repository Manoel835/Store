import { Route, Routes } from "react-router-dom";
import Product from "./Page/Product";
import Eletronic from "./Page/Product/Eletronic";
export default function Rotas() {
  return (
    <Routes>
      <Route path="/products/electronics" element={<Eletronic />} />
    </Routes>
  );
}
