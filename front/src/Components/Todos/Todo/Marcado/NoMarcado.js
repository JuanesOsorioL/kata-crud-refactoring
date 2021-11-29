import React from "react";

export const NoMarcado = ({ item }) => {
  return (
    <>
      <span className="c-id">{item.id}</span>
      <span className="c-tarea">{item.name}</span>
    </>
  );
};
