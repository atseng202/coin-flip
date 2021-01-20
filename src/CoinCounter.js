import { useState } from "react";

/** CoinCounter
 *
 * Props:
 *  heads: int count of # of heads
 *  tails: int count of # of tails
 *
 * State:
 *  None
 *
 * App -> CoinGame -> CoinCounter
 **/

function CoinCounter({ heads, tails }) {

  return (
    <p>
      Out of {heads + tails} flips, there have been {heads} heads and {tails} tails.
    </p>
  );
}

export default CoinCounter;
