import React from "react";

export const EncabezadoTabla = () => {
  return (
    <>
      <span className="c-id">ID</span>
      <span className="c-tarea">Tarea</span>
      <span className="c-completado">¿Completado?</span>
      <div className="c-botones"></div>
    </>
  );
};
