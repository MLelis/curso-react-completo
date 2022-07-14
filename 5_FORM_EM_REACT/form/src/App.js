import './App.css';
import MyForm from './components/MyForm';

function App() {
  return (
    <div className="App">
      <h2>Forms</h2>
      <MyForm user={{name: "Marcus", email: "marcus@gmail.com", bio: "Biografia", role: "admin"}} />
    </div>
  );
}

export default App;
