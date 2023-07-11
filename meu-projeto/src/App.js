import logo from './logo.svg';
import './App.css';

function App() {
const nome = 'Thamires'

const novoNome = nome.toUpperCase()

function soma(a, b) {
  return a + b
}

  return (
    <div className="App">
      <h2>Meu título</h2>
      <p>Olá {novoNome}</p>
      <p>Soma: {soma(3, 5)}</p>
    </div>
  );
}

export default App;
