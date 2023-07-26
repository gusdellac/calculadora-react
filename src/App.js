import './App.css';
import freeCodeCampLogo from "./img/freecodecamp-logo.png"
import Boton from './componentes/Boton.jsx';
import Pantalla from "./componentes/Pantalla.jsx";
import BotonClear from './componentes/BotonClear.jsx';
import { useState } from 'react';
import { evaluate } from "mathjs";

function App() {

  const [input, setInput] = useState("");

  const agregarInput = val => {
    setInput(input + val);
  };

  const calcularResultado = () => {
    // condicional para determinar si input es una cadena vacia o no
    // valores truthy / falsy - una cadena vacia es falsa y una cadena no vacia es verdadera
    if(input){
      setInput(evaluate(input));
    } 
    else {
      alert("Por favor ingrese valores para realizar los cálculos.")
    }
  };

  return (
    <div className="App">
      <div className="freecodecamp-logo-contenedor">
        <img 
          src={freeCodeCampLogo}
          className="freecodecamp-logo"
          alt="Logo de freeCodeCamp" />
      </div>
      <div className="contenedor-calculadora">
        <Pantalla input={input}/>
        <div className='fila'>
          <Boton manejarClic={agregarInput}>1</Boton>{
            //Utilizamos etiqueta del componente Boton de apertura y cierre. Dentro de ella podemos colocar un elemento que
            //sera considerado como children, es decir sera enviado como props.children al componente hijo de App que es Boton y 
            //posteriormente renderizado
          }
          <Boton manejarClic={agregarInput}>2</Boton>
          <Boton manejarClic={agregarInput}>3</Boton>
          <Boton manejarClic={agregarInput}>+</Boton>
        </div>
        <div className='fila'>
          <Boton manejarClic={agregarInput}>4</Boton>
          <Boton manejarClic={agregarInput}>5</Boton>
          <Boton manejarClic={agregarInput}>6</Boton>
          <Boton manejarClic={agregarInput}>-</Boton>
        </div>
        <div className='fila'>
          <Boton manejarClic={agregarInput}>7</Boton>
          <Boton manejarClic={agregarInput}>8</Boton>
          <Boton manejarClic={agregarInput}>9</Boton>
          <Boton manejarClic={agregarInput}>*</Boton>
        </div>
        <div className='fila'>
          <Boton manejarClic={calcularResultado}>=</Boton>
          <Boton manejarClic={agregarInput}>0</Boton>
          <Boton manejarClic={agregarInput}>.</Boton>
          <Boton manejarClic={agregarInput}>/</Boton>
        </div>
        <div className='fila'>
          <BotonClear manejarClear={() => setInput("")}>Clear</BotonClear>
        </div>
      </div>
    </div>
  );
}

export default App;
