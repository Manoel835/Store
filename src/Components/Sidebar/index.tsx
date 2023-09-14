import React, { useEffect, useState } from "react";
import { SideBar, Box } from "./styled";
import axios from "axios";
import { Link } from "react-router-dom";
export default function Sidebar() {
  const [categories, setCategories] = useState([]);
  const getCategories = async () => {
    axios
      .get("https://fakestoreapi.com/products/categories")
      .then(function (response) {
        const data = response.data;
        setCategories(data);
      });
  };

  useEffect(() => {
    getCategories();
  }, []);

  return (
    <SideBar>
      {categories.map((category, index) => (
        <Box key={index}>
          <Link to={`/products/${category}`}>{category}</Link>
        </Box>
      ))}
    </SideBar>
  );
}
