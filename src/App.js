import './App.css';
import freeCodeCampLogo from "./img/freecodecamp-logo.png"
import Boton from './componentes/Boton.jsx';
import Pantalla from "./componentes/Pantalla.jsx";
import BotonClear from './componentes/BotonClear.jsx';

function App() {
  return (
    <div className="App">
      <div className="freecodecamp-logo-contenedor">
        <img 
          src={freeCodeCampLogo}
          className="freecodecamp-logo"
          alt="Logo de freeCodeCamp" />
      </div>
      <div className="contenedor-calculadora">
        <Pantalla />
        <div className='fila'>
          <Boton>1</Boton>{
            //Utilizamos etiqueta del componente Boton de apertura y cierre. Dentro de ella podemos colocar un elemento que
            //sera considerado como children, es decir sera enviado como props.children al componente hijo de App que es Boton y 
            //posteriormente renderizado
          }
          <Boton>2</Boton>
          <Boton>3</Boton>
          <Boton>+</Boton>
        </div>
        <div className='fila'>
          <Boton>4</Boton>
          <Boton>5</Boton>
          <Boton>6</Boton>
          <Boton>-</Boton>
        </div>
        <div className='fila'>
          <Boton>7</Boton>
          <Boton>8</Boton>
          <Boton>9</Boton>
          <Boton>*</Boton>
        </div>
        <div className='fila'>
          <Boton>=</Boton>
          <Boton>0</Boton>
          <Boton>.</Boton>
          <Boton>/</Boton>
        </div>
        <div className='fila'>
          <BotonClear>Clear</BotonClear>
        </div>
      </div>
    </div>
  );
}

export default App;
