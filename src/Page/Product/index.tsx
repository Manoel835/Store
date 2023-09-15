import axios from "axios";
import { Container, Page, Box, Image, PageMain } from "./styled";
import { useState, useEffect } from "react";

import Sidebar from "../../Components/Sidebar";

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
    const response = await axios.get<ProductProps[]>(
      "https://fakestoreapi.com/products/category/men's clothing"
    );

    const data = response.data;
    setProducts(data);
  };
  useEffect(() => {
    getProducts();
  }, []);

  return (
    <PageMain>
      <Page>
        <Container>
          <Sidebar />
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
    </PageMain>
  );
}
