import React from "react";
import "./Sponsors.css";
import Svg1 from "../../../assets/Ic_laptop.svg";
import Svg2 from "../../../assets/Ic_laptop.svg";
import Svg3 from "../../../assets/Ic_laptop.svg";
import Svg4 from "../../../assets/Ic_laptop.svg";
import Svg5 from "../../../assets/Ic_laptop.svg";

const Sponsors = () => {
  return (
    <main>
      <div className="sponsors">
        <div className="partners">
          <img src={Svg1} alt="sponsor1" />
          <img src={Svg2} alt="sponsor2" />
          <img src={Svg3} alt="sponsor3" />
          <img src={Svg4} alt="sponsor4" />
          <img src={Svg5} alt="sponsor5" />
        </div>
      </div>
    </main>
  );
};

export default Sponsors;
