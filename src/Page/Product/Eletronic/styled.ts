import styled from "styled-components";

export const PageMain = styled.div`
  background-color: black;
`;

export const Page = styled.div`
  display: flex;
  min-height: 100vh;
  justify-content: center;
  align-items: center;
`;
export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const Box = styled.div`
  height: 45vh;
  margin: 10px;
  border-radius: 20px;
  background-color: white;
`;
export const Image = styled.img`
  height: 18vh;
  margin-left: 90px;
`;
export const DivContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
`;
