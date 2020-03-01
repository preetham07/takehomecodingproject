import React from "react";
import {COLORS} from "../utils/const";

export const HomePage = () => {
  console.log("COLORS::",COLORS);
  return <div>
  {COLORS.map((item, value) => (
      <div className="homePageBanners homePageColor" style={{"background":item}}></div>
  ))}
  </div>;
};
