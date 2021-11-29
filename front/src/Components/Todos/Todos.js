import React, { useState, useEffect } from "react";
import {
  ModificarTodo,
  AgregarTodo,
  consultarTodo,
} from "../../Connections/Connection";
import { Todo } from "./Todo/Todo";
import { TodoForm } from "./TodoForm";
import { EncabezadoTabla } from "./EncabezadoTabla";
import "./Todos.css";

export const Todos = ({ idGrupo }) => {
  const [control, setControl] = useState(false);
  const [busquedaTodo, setBusquedaTodo] = useState([]);
  const [editar, setEditar] = useState();
  const [texto, setTexto] = useState("");

  useEffect(() => {
    data();
    setControl(false);
  }, [control]);

  const data = async () => {
    const Resultado = await consultarTodo(idGrupo);
    setBusquedaTodo(Resultado);
  };

  function Validar(valor) {
    return valor !== "";
  }

  function Modificar() {
    let body = editar;
    if (Validar(texto)) {
      body.name = texto;
      ModificarTodo(body);
      setTexto("");
      setEditar();
      return;
    }
    alert("por favor no dejar campos vacios");
  }

  function Agregar() {
    if (Validar(texto)) {
      let body = {
        name: texto,
        completed: false,
        groupListId: idGrupo,
      };
      AgregarTodo(body);
      setTexto("");
      setControl(true);
      return;
    }
    alert("por favor no dejar campos vacios");
  }

  return (
    <>
      <TodoForm
        texto={texto}
        setTexto={setTexto}
        editar={editar}
        Modificar={Modificar}
        Agregar={Agregar}
      />

      <div className="contendorTodos">
        <EncabezadoTabla />
        <ul>
          {busquedaTodo.map((item) => (
            <Todo
              key={item.id}
              item={item}
              setControl={setControl}
              setTexto={setTexto}
              setEditar={setEditar}
            />
          ))}
        </ul>
      </div>
    </>
  );
};
