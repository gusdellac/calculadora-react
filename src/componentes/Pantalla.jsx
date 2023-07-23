import React from "react";
import "../hojas-de-estilo/Pantalla.css";

//componente de clase definido con una arrow function
const Pantalla = ({ input }) => (
    <div className="input">
        {input}
    </div>
);

export default Pantalla;