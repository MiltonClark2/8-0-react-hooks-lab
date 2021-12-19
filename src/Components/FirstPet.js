import React, { useState } from "react";
import "./FirstPet.css";


const FirstPet = () => {
  const [ firstPetChecked, setFirstPetChecked ] = useState(false);

  const handleCheckboxClick = () => {
    setFirstPetChecked(!firstPetChecked)
  }


  return (
    <section className="first-pet">
      <h4>Is this your first pet?</h4>
      <br />
      <form>
        <input 
          type="checkbox" 
          onClick={handleCheckboxClick}
        />
      </form>
      
          <h5>
            {!firstPetChecked ? "No" : "Yes"}      
          </h5>
    
    </section>
  );
}




export default FirstPet;
