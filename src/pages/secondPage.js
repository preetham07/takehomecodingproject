import React,{ useState } from "react";
const axios = require('axios');

export const SecondPage = () => {
const [image, setImage] = useState("");
  var list = [];
  var img = "";
  axios.get(`https://pokeapi.co/api/v2/pokemon/123/`).then((res) => {
    list = res.data;
    console.log("res.data",res.data.sprites.back_default);
    img = res.data.sprites.back_default;
    setImage(img);
    console.log("image",image);
  });

  return <div>
  <div className="homePageBanners homePageColor0">
    { (image !== "") ?
  <img src={image} className="pokoImage"/>
  :<div className="pokoImage" style={{"width":"100px"}}>Loading Image</div>
}
  </div>
  </div>;
};
