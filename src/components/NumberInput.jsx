import React, { useState } from "react";
import PropTypes from "prop-types";
import Resultados from "./Resultados";

const NumberInput = () => {
  const [numeros, setNumeros] = useState({
    numero1: 0,
    numero2: 0,
  });

  const { numero1, numero2 } = numeros;

  const handleChange = (e) => {
    setNumeros({
      ...numeros,
      [e.target.name]: parseInt(e.target.value),
    });
  };

  const suma = () => numero1 + numero2;
  const resta = () => numero1 - numero2;
  const multiplicacion = () => numero1 * numero2;
  const division = () => numero1 / numero2;

  return (
    <>
      <label className="mx-2">
        Numero 1:
        <input
          name="numero1"
          value={numero1}
          onChange={handleChange}
          type="number"
        />
      </label>
      <label className="mx-2">
        Numero 2:
        <input
          name="numero2"
          value={numero2}
          onChange={handleChange}
          type="number"
        />
      </label>
      <Resultados operacion="Suma" calculo={suma()} />
      <Resultados operacion="Resta" calculo={resta()} />
      <Resultados operacion="Multiplicacion" calculo={multiplicacion()} />
      <Resultados operacion="Division" calculo={division()} />
    </>
  );
};

NumberInput.propTypes = {
  name: PropTypes.string,
};

export default NumberInput;
