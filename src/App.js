import './App.css';
import freeCodeCampLogo from "./img/freecodecamp-logo.png"
import Boton from './componentes/Boton.jsx';

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
        <div className='fila'>
          <Boton>1</Boton>{
            //Utilizamos etiqueta del componente Boton de apertura y cierre. Dentro de ella podemos colocar un elemento que
            //sera considerado como children, es decir sera enviado como props.children al componente hijo de App que es Boton y 
            //posteriormente renderizado
          }
        </div>
        <div className='fila'></div>
        <div className='fila'></div>
        <div className='fila'></div>
        <div className='fila'></div>
      </div>
    </div>
  );
}

export default App;
