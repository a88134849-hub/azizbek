import styled from "styled-components";

export const Container = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 150px;
  background-color: #d3cbc5;
  div {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 30px;
    a {
      text-decoration: none;
      color: #1b1a1a;
      font-family: sans-serif;
      font-size: 14px;
    }
  }
  img {
    width: auto;
    height: 50px;
  }
`;
