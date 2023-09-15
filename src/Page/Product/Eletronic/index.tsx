import axios from "axios";
import { useEffect, useState } from "react";
import { Box, Page, PageMain, Image, Container, DivContainer } from "./styled";
import Sidebar from "../../../Components/Sidebar";

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
    const response = await axios.get<EletronicProps[]>(
      "https://fakestoreapi.com/products/category/electronics"
    );
    const data = response.data;
    setEletro(data);
  };
  useEffect(() => {
    GetEltro();
  });
  return (
    <PageMain>
      <Page>
        <Container>
          <Sidebar />
          <DivContainer>
            {eletro.map((eletro) => (
              <Box key={eletro.id}>
                <h2>{eletro.title}</h2>
                <p>
                  {eletro.description}
                  RS:<span>{eletro.price}</span>
                </p>
                <Image src={eletro.image}></Image>
              </Box>
            ))}
          </DivContainer>
        </Container>
      </Page>
    </PageMain>
  );
}
