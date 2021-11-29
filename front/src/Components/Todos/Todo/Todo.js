import React from "react";
import { Marcado } from "./Marcado/Marcado";
import { NoMarcado } from "./Marcado/NoMarcado";
import { ModificarTodo, EliminarTodo } from "../../../Connections/Connection";

export const Todo = ({ item, setControl, setTexto, setEditar }) => {
  const check = async (e, item) => {
    let base = e.target;
    base.nextSibling.children[1].disabled = base.checked;
    base.previousSibling.classList.toggle("tachar");
    base.previousSibling.previousSibling.classList.toggle("tachar");
    item.completed = base.checked;
    await ModificarTodo(item);
  };

  function Eliminar(item, e) {
    EliminarTodo(item.id);
    setControl(true);
  }

  function Editar(item, e) {
    setTexto(item.name);
    setEditar(item);
  }

  return (
    <li className="contendorTodos">
      {item.completed ? <Marcado item={item} /> : <NoMarcado item={item} />}
      <input
        className="c-completado checkbox"
        type="checkbox"
        defaultChecked={item.completed}
        onClick={(e) => {
          check(e, item);
        }}
      ></input>
      <div className="c-botones">
        <button
          className="left"
          onClick={(e) => {
            Eliminar(item, e);
          }}
        >
          Eliminar
        </button>
        <button
          className="left"
          disabled={item.completed}
          onClick={(e) => {
            Editar(item, e);
          }}
        >
          Editar
        </button>
      </div>
    </li>
  );
};
