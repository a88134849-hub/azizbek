import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import Rating from "@mui/material/Rating";
import SyncIcon from "@mui/icons-material/Sync";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";

import Image1 from "../../assets/Shoping1.png";
import Image2 from "../../assets/Shoping2.png";
import Image3 from "../../assets/Shoping3.png";
import Image4 from "../../assets/Shoping4.png";
import Image5 from "../../assets/Shoping5.png";
import Image6 from "../../assets/Shoping6.png";
import Image7 from "../../assets/Shoping7.png";
import Image8 from "../../assets/Shoping8.png";

import { Shop } from "./style";

export default function Shoping() {
  return (
    <Shop>
      <p className="team">PROFESSIONAL TEAM</p>

      <div className="top">
        <h2>The Best New Arrivals</h2>

        <div className="tabs">
          <ButtonGroup
            variant="contained"
            disableElevation
            aria-label="Basic button group"
            sx={{
              "& .MuiButton-root": {
                backgroundColor: "#262b3a",
                color: "#fff",
                borderRadius: 0,
                border: "none",
                fontSize: "14px",
                textTransform: "uppercase",
                padding: "10px 24px",
                "&:hover": { backgroundColor: "#1b1f2b" },
              },
            }}
          >
            <Button>One</Button>
          </ButtonGroup>

          <ButtonGroup
            variant="outlined"
            aria-label="Basic button group"
            sx={{
              "& .MuiButton-root": {
                border: "none",
                borderRadius: 0,
                backgroundColor: "#fff",
                textTransform: "uppercase",
                fontSize: "14px",
                padding: "10px 24px",
                color: "#000",
                "&:hover": { backgroundColor: "#eee" },
              },
            }}
          >
            <Button>One</Button>
            <Button>Two</Button>
            <Button>Three</Button>
          </ButtonGroup>
        </div>
      </div>

      <div className="grid">
        <div className="card">
          <img src={Image1} alt="" />
          <div className="icons">
            <SyncIcon />
            <FavoriteBorderIcon />
            <ShoppingCartOutlinedIcon />
          </div>
          <h3>Blue chair</h3>
          <div className="row">
            <span>
              <span className="old">$20.00</span> $15.00
            </span>
            <Rating defaultValue={5} readOnly size="small" />
          </div>
        </div>

        <div className="card">
          <img src={Image2} alt="" />
          <div className="icons">
            <SyncIcon />
            <FavoriteBorderIcon />
            <ShoppingCartOutlinedIcon />
          </div>
          <h3>Blue chair</h3>
          <div className="row">
            <span>
              <span className="old">$18.00</span> $12.00
            </span>
            <Rating defaultValue={5} readOnly size="small" />
          </div>
        </div>

        <div className="card">
          <img src={Image3} alt="" />
          <div className="icons">
            <SyncIcon />
            <FavoriteBorderIcon />
            <ShoppingCartOutlinedIcon />
          </div>
          <h3>Coral vase</h3>
          <div className="row">
            <span>$15.00</span>
            <Rating defaultValue={5} readOnly size="small" />
          </div>
        </div>

        <div className="card">
          <img src={Image4} alt="" />
          <div className="icons">
            <SyncIcon />
            <FavoriteBorderIcon />
            <ShoppingCartOutlinedIcon />
          </div>
          <h3>Coffe table set</h3>
          <div className="row">
            <span>$15.00</span>
            <Rating defaultValue={5} readOnly size="small" />
          </div>
        </div>
        <div className="card">
          <img src={Image5} alt="" />
          <div className="icons">
            <SyncIcon />
            <FavoriteBorderIcon />
            <ShoppingCartOutlinedIcon />
          </div>
          <h3>Decorative vase</h3>
          <div className="row">
            <span>$25.00</span>
            <Rating defaultValue={5} readOnly size="small" />
          </div>
        </div>

        <div className="card">
          <img src={Image6} alt="" />
          <div className="icons">
            <SyncIcon />
            <FavoriteBorderIcon />
            <ShoppingCartOutlinedIcon />
          </div>
          <h3>Coral vase</h3>
          <div className="row">
            <span>
              <span className="old">$20.00</span> $12.00
            </span>
            <Rating defaultValue={5} readOnly size="small" />
          </div>
        </div>

        <div className="card">
          <img src={Image7} alt="" />
          <div className="icons">
            <SyncIcon />
            <FavoriteBorderIcon />
            <ShoppingCartOutlinedIcon />
          </div>
          <h3>Gray sofa</h3>
          <div className="row">
            <span>
              <span className="old">$20.00</span> $15.00
            </span>
            <Rating defaultValue={5} readOnly size="small" />
          </div>
        </div>

        <div className="card">
          <img src={Image8} alt="" />
          <div className="icons">
            <SyncIcon />
            <FavoriteBorderIcon />
            <ShoppingCartOutlinedIcon />
          </div>
          <h3>Black chair</h3>
          <div className="row">
            <span>
              <span className="old">$20.00</span> $15.00
            </span>
            <Rating defaultValue={5} readOnly size="small" />
          </div>
        </div>
      </div>
    </Shop>
  );
}
