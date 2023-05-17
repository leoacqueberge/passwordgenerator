import React, { useRef, useState } from "react";

// Utility functions
import { generatePassword } from "../utils/form.utils";

export default function Form() {
  const numberRef = useRef();
  const symbolsRef = useRef();
  const lengthRef = useRef();

  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    let newPassword = generatePassword(
      numberRef.current.checked,
      symbolsRef.current.checked,
      lengthRef.current.value || 6
    );

    setPassword(newPassword);
  };

  return (
    <form className="password__form" onSubmit={handleSubmit}>
      <h2>Génerer un mot de passe sécurisé 🔒</h2>
      <div className="password__inputs">
        <h4 className="password__text">{password}</h4>
        <div className="flex">
          <label htmlFor="password-length">Nombre de caractères ?</label>
          <input
            type="number"
            max={72}
            min={6}
            name="password-length"
            style={{ maxWidth: "8ch" }}
            ref={lengthRef}
          />
        </div>
        <div className="flex">
          <label htmlFor="numbers">Inclure des nombres ?</label>
          <input type="checkbox" name="numbers" ref={numberRef} />
        </div>
        <div className="flex">
          <label htmlFor="symbols">Inclure des symboles ?</label>
          <input type="checkbox" name="symbols" ref={symbolsRef} />
        </div>
        <button className="btn">Generate</button>
      </div>
    </form>
  );
}