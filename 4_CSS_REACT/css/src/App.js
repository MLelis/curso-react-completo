import './App.css';
import MyComponent from './components/MyComponent';
import {useState} from "react";
import Title from './components/Title';

function App() {
  const n = 15;
  const [name] = useState("Marcus");

  const redTitle = true;

  return (
    <div className="App">
      {/* CSS Global */}
     <h1>React com CSS</h1>

     {/* CSS de Component*/}
     <MyComponent />
     <p>Paragrafo do APP.JS</p>

     {/* Inline CSS */}
     <p style={{color: "blue", padding: "25px", borderTop: "2px solid red"}}>
      Esse elemento foi estilizado de forma inline
     </p>
     <p style={{color: "margenta", padding: "25px", borderTop: "2px solid yellow"}}>
      Esse elemento foi estilizado de forma inline
     </p>

     {/* Inline dinamico */}
     <h2 style={n > 10 ? ({color: "purple"}) : ({color: "pink"})}>
      CSS Dinâmico
     </h2>
     <h2 style={n < 10 ? ({color: "purple"}) : ({color: "pink"})}>
      CSS Dinâmico
     </h2>
     <h2 style={name === "Marcus" ? ({color: "green", backgroundColor: "#000"}) : null}>
      Teste Nome
     </h2>

     {/* Classe dinamica */}
     <h2 className={redTitle ? "red-title" : "title"}>
      Este titulo vai ter classe dinamica
     </h2>

     {/* CSS Modules */}
     <Title />
     <h2 className="my_title">Testando</h2>

    </div>
  );
}

export default App;
