import React from "react";
import PropTypes from "prop-types";

const Resultados = ({ operacion, calculo }) => {
  return (
    <div>
      <br />
      <span>
        {operacion}: {calculo}
      </span>
    </div>
  );
};

Resultados.propTypes = {
  operacion: PropTypes.string,
  calculos: PropTypes.number,
};

export default Resultados;
