import { Route, Routes } from "react-router-dom";
import Product from "./Page/Product";
export default function Rotas() {
  return (
    <Routes>
      <Route path="/" element={<Product />} />
    </Routes>
  );
}
