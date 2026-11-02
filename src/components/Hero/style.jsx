import styled from "styled-components";
import Image from "../../assets/Hero.png";

export const Asos = styled.div`
  display: flex;
  align-items: left;
  justify-content: center;
  flex-direction: column;
  padding-left: 160px;
  min-height: 87.5vh;
  background-color: #d3cbc5;
  background-image: url(${Image});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  p {
    font-family: sans-serif;
    font-size: small;
    padding-bottom: 10px;
  }
  h1 {
    font-family: sans-serif;
    font-weight: 500;
    padding-bottom: 10px;
    line-height: 1.2;
  }
  h3 {
    font-family: sans-serif;
    font-weight: 500;
    padding-bottom: 10px;
  }
  button {
    width: 100px;
    height: 30px;
    background-color: #1c1b1b;
    color: white;
    border: none;
  }
`;
