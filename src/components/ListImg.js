import React from "react";
import Img from "./Img";

const ListImg = ({ imagenes }) => {
  return (
    <div className="col-12 p-5 row">
      {imagenes.map((imagen) => (
        <Img key={imagen.id} imagen={imagen} />
      ))}
    </div>
  );
};

export default ListImg;
