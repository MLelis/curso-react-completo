import { useState } from 'react';
import './App.css';

import City from "./assets/city.jpg";
import CarDetails from './components/CarDetails';
import ConditionalRender from './components/ConditionalRender';
import ListRender from './components/ListRender';
import ManageData from './components/ManageData';
import ShowUserName from './components/ShowUserName';
import Fragment from './components/Fragment';
import Container from './components/Container';
import ExecuteFunction from './components/ExecuteFunction';
import Message from './components/Message';
import ChangeMessageState from './components/ChangeMessageState';
import UserDetails from './components/UserDetails';

function App() {

  //const name = "Marcus";
  const [userName] = useState("Fernanda");

  const cars = [
    { id: 1, brand: "Ferrari", color: "Amarelo", newCar: true, km:0 },
    { id: 2, brand: "KIA", color: "Preto", newCar: false, km:197640 },
    { id: 3, brand: "Classic", color: "Cinza", newCar: false, km:123312 }
  ];

  function showMessage() {
    console.log("Evento do componente pai!");
  }

  const [message, setMessage] = useState("");

  const handleMessage = (msg) => {
    setMessage(msg);
  }

  const users = [
    {id: 1, name: "Marcus", job: "Programador", age: 18},
    {id: 2, name: "Jordhan", job: "CyberSec", age: 19},
    {id: 3, name: "Laila", job: "Dev", age: 20},
    {id: 4, name: "Fernanda", job: "Estudante", age: 17},
  ]

  return (
    <div className="App">
      <h1>Avançando em React</h1>

      {/* Imagem em public */}
      <div>
        <img src="/img1.jpg" alt="Paisagem" />
      </div>

      {/* Imagem em SRC */}
      <div>
        <img src={City} alt="Cidade" />
      </div>

      <ManageData />
      <ListRender />
      <ConditionalRender />
      {/* props */}
      <ShowUserName name={userName} />
      {/* destructuring */}
      <CarDetails brand="VW" km={10000} color="Azul" newCar={false} />
      {/* reaproveitamento */}
      <CarDetails brand="FORD" km={9000} color="Branco"  newCar={true} />
      <CarDetails brand="Foat" km={19000} color="Vermelho" newCar={false} />
      {/* loop em array de objetos */}
      {cars.map((car) => (
        <CarDetails
          key={car.id} 
          brand={car.brand} 
          color={car.color} 
          km={car.km} 
          newCar={car.newCar} 
        />
      ))}
      {/* fragment */}
      <Fragment propFragment="teste" />
      {/* children */}
      <Container myValue="teste">
        <p>Esté é o conteudo</p>
      </Container>
      <Container myValue="teste 2">
        <h5>Testando Container</h5>
      </Container>
      {/* executar função */}
      <ExecuteFunction myFunction={showMessage} />
      {/* state lift */}
      <Message msg={message} />
      <ChangeMessageState handleMessage={handleMessage} />
      {/* desafio */}
      {users.map((user) => (
        <UserDetails 
          key={user.id}
          name={user.name}
          job={user.job}
          age={user.age}
        />
      ))}


    </div>
  );
}

export default App;
