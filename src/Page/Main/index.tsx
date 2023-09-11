import Product from "../Product/index";
import Sidebar from "../../Components/Sidebar/index";
import { Page, Flex } from "./styled";
export default function Main() {
  return (
    <Page>
      <Flex>
        <h1>Tudo E Mais Um Pouco</h1>
        <Sidebar />
      </Flex>
      <Product />
    </Page>
  );
}
