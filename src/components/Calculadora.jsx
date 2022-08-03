import React from "react";
import { useState } from "react";
import NumberInput from "./NumberInput";
import Resultados from "./Resultados";

const Calculadora = () => {
  const [suma, setSuma] = useState(0);

  const [numeros, setNumeros] = useState({
    numero1: 0,
    numero2: 0,
  });

  return (
    <>
      <NumberInput />

      <Resultados operacion="Suma" calculo={suma} />
      <Resultados operacion="Resta" calculo={suma} />
      <Resultados operacion="Multiplicacion" calculo={suma} />
      <Resultados operacion="Division" calculo={suma} />
    </>
  );
};

export default Calculadora;
