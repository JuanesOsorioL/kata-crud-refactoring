import React from "react";

export const Marcado = ({ item }) => {
  return (
    <>
      <span className="c-id tachar">{item.id}</span>
      <span className="c-tarea tachar">{item.name}</span>
    </>
  );
};
