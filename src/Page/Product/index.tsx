import axios from "axios";
import { Container, Page, Box, Image } from "./styled";
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
      .get<ProductProps[]>(
        "https://fakestoreapi.com/products/category/men's clothing"
      )
      .then((response) => {
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
            <p>
              {product.description} R$:<span>{product.price}</span>
            </p>
            <Image src={product.image}></Image>
          </Box>
        ))}
      </Container>
    </Page>
  );
}
