import Image from "../../assets/Group.png";

import { Foot } from "./style";

export default function Footer() {
  return (
    <Foot>
      <img src={Image} alt="" />
      <h1>Join Now For Early Access</h1>
      <p>
        Suspendisse eu velit est. Cras nec vestibulum <br /> quam. Donec
        tincidunt purus nec enim tincidunt, sit
      </p>
    </Foot>
  );
}
