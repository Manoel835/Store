import { useEffect, useState } from "react";
import { SideBar, Box, Container } from "./styled";
import axios from "axios";
import { Link } from "react-router-dom";

export default function Sidebar() {
  const [categories, setCategories] = useState([]);
  const getCategories = async () => {
    axios
      .get("https://fakestoreapi.com/products/categories")
      .then((response) => {
        const data = response.data;
        setCategories(data);
      });
  };

  useEffect(() => {
    getCategories();
  }, []);

  return (
    <SideBar>
      <h1>
        Tudo
        <br />E<br /> Mais Um Pouco
      </h1>
      {categories.map((category, index) => (
        <Container>
          <Box key={index}>
            <Link to={`/products/${category}`}>
              <h1>{category}</h1>
            </Link>
          </Box>
        </Container>
      ))}
    </SideBar>
  );
}
