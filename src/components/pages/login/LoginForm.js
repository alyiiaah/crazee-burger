import React from 'react'
import { useState } from 'react';

export default function LoginForm() {


     //State

  const [inputValue, setInputValue] = useState ("");

  //Comportements

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`Bonjour ${inputValue}`);
    setInputValue("");
  };

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };
//affichage (render)
  return (
    <form action="submit" onSubmit={handleSubmit}>
        <h1>Bienvenue chez nous ! </h1>
        <br />
        <h2>Connectez-vous</h2>
        <input
          value={inputValue}
          onChange={handleChange}
          type="text"
          placeholder="Entrez votre prénom.."
          required
        />
        <button> Accédez à votre éspace</button>
      </form>
  )
}
