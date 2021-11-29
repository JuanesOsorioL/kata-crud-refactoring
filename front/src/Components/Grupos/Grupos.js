import React, { useEffect, useState } from "react";
import {
  consultarGrupos,
  AgregarGrupo,
  EliminarGrupo,
} from "../../Connections/Connection";
import { Grupo } from "./Grupo";
import "./Grupo.css";

export const Grupos = () => {
  const [mostrarGrupos, setMostrarGrupos] = useState([]);
  const [control, setControl] = useState(false);

  useEffect(() => {
    data();
    setControl(false);
  }, [control]);

  const data = async () => {
    const Resultado = await consultarGrupos();
    setMostrarGrupos(Resultado);
  };

  function CrearGrupo(e) {
    let contenido = e.target.previousSibling.value;
    e.target.previousSibling.value = "";
    if (contenido !== "") {
      let body = {
        nameGroup: contenido,
      };
      AgregarGrupo(body);
      setControl(true);
      return;
    }
    alert("por favor no dejar campos vacios");
  }

  function Eliminar(item) {
    EliminarGrupo(item.idGrupo);
    setControl(true);
  }

  return (
    <div>
      <input className="left" type="text" placeholder="Lista de TO-DO"></input>
      <button type="submit" onClick={CrearGrupo}>
        Nueva Lista
      </button>
      {mostrarGrupos.map((item) => (
        <Grupo key={item.idGrupo} item={item} Eliminar={Eliminar} />
      ))}
    </div>
  );
};
