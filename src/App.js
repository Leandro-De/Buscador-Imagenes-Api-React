import React, { useState, useEffect } from "react";
import Form from "./components/Form";

function App() {
  const [busqueda, setBusqueda] = useState("");

  useEffect(() => {
    const consultaApi = async () => {
      if (busqueda === "") return;

      const imgPerPage = 30;
      const key = "24780679-12629805ce0f7c598fbb80420";
      const url = `https://pixabay.com/api/?key=${key}&q=${busqueda}&per_page=${imgPerPage}`;

      const respuesta = await fetch(url);
      const resultado = await respuesta.json();

      setBusqueda(resultado.hits);
    };
    consultaApi();
  }, [busqueda]);

  return (
    <div className="container">
      <div className="jumbotron">
        <p className="lead text-center">Buscador de Imagenes</p>
        <Form setBusqueda={setBusqueda} />
      </div>
    </div>
  );
}

export default App;
