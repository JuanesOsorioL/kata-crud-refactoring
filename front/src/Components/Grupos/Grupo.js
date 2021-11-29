import React from "react";
import { Todos } from "../Todos/Todos";
export const Grupo = ({ item, Eliminar }) => {
  return (
    <>
      <div className="contendorGroup" key={item.idGrupo}>
        <h1 className="TituloGroup">
          {item.nameGroup}{" "}
          <button
            onClick={() => {
              Eliminar(item);
            }}
          >
            Eliminar
          </button>
        </h1>
        <Todos idGrupo={item.idGrupo} />
      </div>
    </>
  );
};
