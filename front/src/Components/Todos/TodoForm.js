import React from "react";

export const TodoForm = ({ texto, setTexto, editar, Modificar, Agregar }) => {
  return (
    <>
      <input
        value={texto}
        className="left"
        type="text"
        placeholder="¿Que piensas hacer?"
        onChange={(e) => {
          setTexto(e.target.value);
        }}
      ></input>
      {editar ? (
        <>
          <button className="left" onClick={Modificar}>
            Modificar
          </button>
        </>
      ) : (
        <>
          <button className="left" onClick={Agregar}>
            Agregar
          </button>
        </>
      )}
    </>
  );
};
