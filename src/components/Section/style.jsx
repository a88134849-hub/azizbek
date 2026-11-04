import styled from "styled-components";

export const Cha = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 150px;
  background-color: #1c1b1b;
  color: white;
  width: 1035px;
  height: 120px;
  margin-left: 160px;
  margin-bottom: 50px;
  .mini {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: row;
  }
  .div {
    margin-left: 15px;
    h3 {
      font-family: sans-serif;
      font-weight: 500;
      font-size: medium;
    }
    p {
      font-family: sans-serif;
      font-weight: 500;
      font-size: small;
    }
  }
`;
