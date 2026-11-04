import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import ViewInArIcon from "@mui/icons-material/ViewInAr";
import CameraAltIcon from "@mui/icons-material/CameraAlt";
import WorkspacePremiumIcon from "@mui/icons-material/WorkspacePremium";

import { Cha } from "./style";

export default function Section() {
  return (
    <Cha>
      <div className="mini">
        <LocalShippingIcon />
        <div className="div">
          <h3>Free Shipping</h3>
          <p>Capped at $319 per order</p>
        </div>
      </div>
      <div className="mini">
        <ViewInArIcon />
        <div className="div">
          <h3>Free Returns</h3>
          <p>Within 25 Days</p>
        </div>
      </div>
      <div className="mini">
        <CameraAltIcon />
        <div className="div">
          <h3>100% Secure</h3>
          <p>100% Secure payment</p>
        </div>
      </div>
      <div className="mini">
        <WorkspacePremiumIcon />
        <div className="div">
          <h3>Best Price</h3>
          <p>Guaranteed Gifts</p>
        </div>
      </div>
    </Cha>
  );
}
