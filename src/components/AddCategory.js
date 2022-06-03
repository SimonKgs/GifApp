import React, { useState } from "react";
//  para hacer requerido que venga el parametro, se especifica al final
import PropTypes from "prop-types";

export const AddCategory = ({ setCategories }) => {
  //recibimos como props, todo los parametros enviados al componente, con lo que los desestructuramos
  // console.log(categories, setCategories);

  const [inputValue, setInputValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (inputValue.trim().length > 1) {
      //si le pasaramos tambien las categorias, para este caso no es necesario.
      // setCategories([...categories, inputValue]);
      // el set categories se puede llamar con un callback que tiene el estado anterior sin falta de pasarselo
      setCategories((cats) => [inputValue, ...cats]);
      setInputValue("");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={inputValue}
        placeholder="buscar..."
        //  recibo el evento y fijo su valor cada vez que cambie
        onChange={(e) => setInputValue(e.target.value)}
      />
    </form>
  );
};

//  tras importar el propTypes le especificamos asi que sea obligatorio el campo setCategories en la funcion
AddCategory.propTypes = {
  setCategories: PropTypes.func.isRequired,
};
