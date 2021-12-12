import React, { useState, useEffect } from "react";
import Form from "./components/Form";
import ListImg from "./components/ListImg";

function App() {
  const [busqueda, setBusqueda] = useState("");
  const [imagenes, setImagenes] = useState([]);

  useEffect(() => {
    const consultaApi = async () => {
      if (busqueda === "") return;

      const imgPerPage = 30;
      const key = "24780679-12629805ce0f7c598fbb80420";
      const url = `https://pixabay.com/api/?key=${key}&q=${busqueda}&per_page=${imgPerPage}`;

      const respuesta = await fetch(url);
      const resultado = await respuesta.json();

      setImagenes(resultado.hits);
    };
    consultaApi();
  }, [busqueda]);

  return (
    <div className="container">
      <div className="jumbotron">
        <p className="lead text-center">Buscador de Imagenes</p>
        <Form setBusqueda={setBusqueda} />
      </div>
      <div className="row justify-content-center">
        <ListImg imagenes={imagenes} />
      </div>
    </div>
  );
}

export default App;
