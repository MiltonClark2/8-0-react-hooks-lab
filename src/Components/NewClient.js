import React, { useState } from "react";
import "./NewClient.css";


const NewClient = () => {
  const [ firstName, setFirstName] = useState("");
  const [ lastName, setLastName ] = useState("");
  const [ phone, setPhone ] = useState("");
  const [ email, setEmail ] = useState("");

  const handleChangeFirstName = (e) => {
    setFirstName(e.target.value);
  };

  const handleChangeLastName = (e) => {
    setLastName(e.target.value);
  };

  const handleChangePhone = (e) => {
    setPhone(e.target.value);
  };

  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  return (
    <section className="new-client">
        <h4>New Client Info</h4>
        <div>
          <form>
            <label htmlFor="firstName">First Name</label>
            <input 
              type="text" 
              id="firstName"
              value={ firstName } 
              onChange={ handleChangeFirstName }
            />
            <label htmlFor="lastName">Last Name</label>
            <input 
              type="text" 
              id="lastName" 
              value={ lastName } 
              onChange={ handleChangeLastName }
            />
            <label htmlFor="phone">Telephone</label>
            <input 
              type="tel" 
              id="phone"
              value={ phone } 
              onChange={ handleChangePhone } 
            />
            <label htmlFor="email">Email</label>
            <input 
              type="email" 
              id="email" 
              value={ email } 
              onChange={ handleChangeEmail }
            />
          </form>
          <article>
            <h5>{ firstName }</h5>
            <h5>{ lastName }</h5>
            <h5>{ phone }</h5>
            <h5>{ email }</h5>
          </article>
        </div>
    </section>
  );
};

export default NewClient;
