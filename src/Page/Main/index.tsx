import axios from "axios";
import { Container, Page } from "./styled";
import { useState, useEffect } from "react";

type ProductProps = {
  id: number;
  description: string;
};

export default function Main() {
  const [product, setProducts] = useState<ProductProps[]>([]);

  const getProducts = async () => {
    axios
      .get<ProductProps[]>("https://fakestoreapi.com/products/")
      .then(function (response) {
        const data = response.data;
        setProducts(data);
      });
  };
  useEffect(() => {
    getProducts();
  }, []);

  return (
    <Page>
      <Container>
        <h1>Descrição</h1>
        {product.map((product) => (
          <p key={product.id}>{product.description}</p>
        ))}
      </Container>
    </Page>
  );
}
