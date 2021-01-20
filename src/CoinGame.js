import { useState } from 'react';
import { randNum } from './random';
import Coin from './Coin';
import CoinCounter from './CoinCounter';

/** CoinGame
 * Show a new game for flipping coins 
 * 
 * Props: 
 *  None
 * 
 * State:
 *  heads: int count of # of heads
 *  tails: int count of # of tails
 * 
 * App -> CoinGame
 **/  

 function CoinGame() {
  const [heads, setHeads] = useState(0);
  const [tails, setTails] = useState(0);
  const [isHeads, setIsHeads] = useState(null);

  /** Handles flipping the Coin and incrementing the count of heads or tails */  
  function handleFlip() {
    const currNum = randNum();
    if (currNum === 0) {
      setHeads(heads + 1);
      setIsHeads(true);
    } else {
      setTails(tails + 1);
      setIsHeads(false);
    }
  }

   return (
    <div>
      <h1>Let's flip a coin!</h1>
      <Coin isHeads={isHeads}/>
      <button onClick={handleFlip}>Flip me!</button>
      <CoinCounter heads={heads} tails={tails}/>
    </div>
   );
 }

 export default CoinGame;