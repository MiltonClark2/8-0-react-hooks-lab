import React, { useState } from "react";
import "./NumberOfPets.css";

const NumberOfPets = () => {
  const [ numOfPets, setNumOfPets ] = useState(0);
  
  const handlePlusBtn = () => {
    setNumOfPets(numOfPets + 1);
  };

  const handleMinusBtn = () => {
    setNumOfPets(numOfPets - 1);
  };

  if(numOfPets < 0){
    setNumOfPets(0);
  };

  return (
    <section className="num-of-pets">
      <h4>Number of Pets</h4>
      <h5>{ numOfPets }</h5>
      <div>
        <button id="less" onClick={ handleMinusBtn }> - </button>
        <button id="more" onClick={ handlePlusBtn }> + </button>
      </div>
    </section>
  );
}

export default NumberOfPets;
