import React from "react";
import { useState } from "react";

export default function LoginPage() {
  //State

  const [inputValue, setInputValue] = useState("Bob");

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
    <div>
      <h1>Bienvenus chez nous!</h1>
      <br />
      <h2>Connectez-vous</h2>
      <form action="submit" onSubmit={handleSubmit}>
        <input
          value={inputValue}
          onChange={handleChange}
          type="text"
          placeholder="Entrez votre prénom..."
          required
        />
        <button> Accédez à votre espace</button>
      </form>
    </div>
  );
}
