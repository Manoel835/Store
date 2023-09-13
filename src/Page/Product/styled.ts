import styled from "styled-components";

export const Page = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  min-height: 100vh;
`;

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;
export const Box = styled.div`
  width: 20vw;
  margin: 10px;
  border-radius: 20px;
  background-color: white;

  img {
    height: 20vh;
  }
`;
