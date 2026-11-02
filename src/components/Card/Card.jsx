import { Cards } from "./style";
import Image1 from "../../assets/Card1.png";
import Image2 from "../../assets/Card2.png";
import Image3 from "../../assets/Card3.png";
export default function Card() {
  return (
    <Cards>
      <div>
        <h1>
          New Chair <br />
          Collection 2022
        </h1>
        <button>SHOP NOW</button>
        <br />
        <img src={Image1} alt="" />
      </div>
      <div>
        <h1>Lamp Desk </h1>
        <button>SHOP NOW</button>
        <br />
        <img src={Image2} alt="" />
      </div>
      <div>
        <h1>
          Modern Chair <br />
          Collection 2022
        </h1>
        <button>SHOP NOW</button>
        <br />
        <img src={Image3} alt="" />
      </div>
    </Cards>
  );
}
