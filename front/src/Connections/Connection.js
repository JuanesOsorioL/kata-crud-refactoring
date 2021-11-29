const CONSTANTES = {
  HOST_API: "http://localhost:8080/api",
  BUSCARGRUPOS: "/grupos",
  BUSCARTODOS: "/todos",
  TODO: "/todo",
  GRUPO: "/grupo",
  PUT: "PUT",
  POST: "POST",
  GET: "GET",
  DELETE: "DELETE",
};

async function LlamadoDelete(ruta, metodo) {
  await fetch(ruta, {
    method: metodo,
  }).catch((erores) => console.error("Error:", erores));
}

async function LlamadoGet(ruta, metodo) {
  const Resultado = await fetch(ruta, {
    method: metodo,
  })
    .then((response) => response.json())
    .then((list) => {
      return list;
    })
    .catch((erores) => console.error("Error:", erores));
  return Resultado;
}

async function Llamado(ruta, metodo, Body) {
  const Resultado = await fetch(ruta, {
    method: metodo,
    body: JSON.stringify(Body),
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  })
    .then((response) => response.json())
    .then((list) => {
      return list;
    })
    .catch((erores) => console.error("Error:", erores));
  return Resultado;
}

module.exports = {
  consultarGrupos: async () => {
    return await LlamadoGet(
      CONSTANTES.HOST_API + CONSTANTES.BUSCARGRUPOS,
      CONSTANTES.GET
    );
  },
  consultarTodo: async (id) => {
    return await LlamadoGet(
      CONSTANTES.HOST_API + "/" + id + CONSTANTES.BUSCARTODOS,
      CONSTANTES.GET
    );
  },
  ModificarTodo: async (body) => {
    return await Llamado(
      CONSTANTES.HOST_API + CONSTANTES.TODO,
      CONSTANTES.PUT,
      body
    );
  },
  AgregarTodo: async (body) => {
    return await Llamado(
      CONSTANTES.HOST_API + CONSTANTES.TODO,
      CONSTANTES.POST,
      body
    );
  },
  AgregarGrupo: async (body) => {
    return await Llamado(
      CONSTANTES.HOST_API + CONSTANTES.GRUPO,
      CONSTANTES.POST,
      body
    );
  },
  EliminarTodo: async (id) => {
    await LlamadoDelete(
      CONSTANTES.HOST_API + "/" + id + CONSTANTES.TODO,
      CONSTANTES.DELETE
    );
  },
  EliminarGrupo: async (id) => {
    await LlamadoDelete(
      CONSTANTES.HOST_API + "/" + id + CONSTANTES.GRUPO,
      CONSTANTES.DELETE
    );
  },
};
