import styled from "styled-components";

export const Cards = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 70px;
  margin-bottom: 70px;
  text-align: left;
  padding-left: 160px;
  padding-right: 160px;
  gap: 30px;
  div {
    background-color: #e5e6e6;
    width: 350px;
    height: 350px;
    padding: 40px 25px;
    h1 {
      font-family: sans-serif;
      font-size: larger;
      font-weight: 500;
      padding-bottom: 10px;
      line-height: 1.2;
    }
  }
  img {
    width: auto;
    height: 200px;
  }
  button {
    width: 100px;
    height: 30px;
    background-color: #e5e6e6;
    color: black;
    border: 1px solid black;
    margin-bottom: 15px;
  }
`;
