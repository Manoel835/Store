import axios from "axios";
import { Container, Page, Box } from "./styled";
import { useState, useEffect } from "react";

type ProductProps = {
  id: number;
  title: string;
  description: string;
  price: number;
  image: string;
};

export default function Product() {
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
        {product.map((product) => (
          <Box key={product.id}>
            <h2>{product.title}</h2>
            <p>{product.description}</p>
            <span>R$:{product.price}</span>
            <img src={product.image}></img>
          </Box>
        ))}
      </Container>
    </Page>
  );
}
