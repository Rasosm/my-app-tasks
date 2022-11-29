import { useState } from "react";
import rand from "../Functions/rand";
import ButtonChange from "./ButtonChange";


function BtnChangeRandom() {
  const [numb, setRandom] = useState(rand(5, 25));

  const change = () => {
    setRandom(rand(5, 25));
  };

  return (
    <>
      <button onClick={change}>Random number</button>
      <div className="shape" >{numb}</div>
      <ButtonChange/>
    </>
  );
}

export default BtnChangeRandom;