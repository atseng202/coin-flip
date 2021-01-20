import { useState } from "react";

const IMGS = {
   headsImg: "https://bjc.edc.org/June2017/bjc-r/img/5-algorithms/img_flipping-a-coin/Heads.png",
   tailsImg: "https://bjc.edc.org/June2017/bjc-r/img/5-algorithms/img_flipping-a-coin/Tails.png"
};
/** Coin
 * 
 * Props: 
 *  isHeads: is the coin a heads, tails, or null 
 * 
 * State:
 *  None
 * 
 * App -> CoinGame -> Coin
 **/  

  function Coin({ isHeads }) {

    let imgUrl;
    if (isHeads === null) {
      imgUrl = "";
    }
    else if (isHeads)  {
      imgUrl = IMGS.headsImg; 
    } else {
      imgUrl = IMGS.tailsImg;
    } 

    return (
      <div>
        <img src={imgUrl}></img>
      </div>
    );
  }


  export default Coin;