import axios from "axios";
import { useEffect, useState } from "react";
import { Box, Page } from "../styled";

export default function Eletronic() {
  type EletronicProps = {
    id: number;
    title: string;
    description: string;
    price: number;
    image: string;
  };
  const [eletro, setEletro] = useState<EletronicProps[]>([]);
  const GetEltro = async () => {
    axios
      .get<EletronicProps[]>(
        "https://fakestoreapi.com/products/category/electronics"
      )
      .then((response) => {
        const data = response.data;
        setEletro(data);
      });
  };
  useEffect(() => {
    GetEltro();
  });
  return (
    <Page>
      {eletro.map((eletro) => (
        <Box key={eletro.id}>
          <h2>{eletro.title}</h2>
        </Box>
      ))}
    </Page>
  );
}
