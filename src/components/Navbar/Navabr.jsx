import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";

import { Container } from "./style";
import Image from "../../assets/Group.png";
export default function Navbar() {
  return (
    <Container>
      <img src={Image} />

      <div>
        <a href="">Home</a>
        <a href="">Pages</a>
        <a href="">Services</a>
        <a href="">Projects</a>
        <a href="">Blog</a>
        <a href="">Contact Us</a>
      </div>
      <div>
        <SearchOutlinedIcon />
        <ShoppingCartOutlinedIcon />
      </div>
    </Container>
  );
}
