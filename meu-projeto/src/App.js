import logo from './logo.svg';
import './App.css';
import HelloWorld from './Components/HelloWorld';
import SayMyName from './Components/SayMyName';
import Pessoa from './Components/Pessoa';
import Frase from './Components/Frase';

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
      <HelloWorld/>
      <Frase/>
      <Frase/>
      <SayMyName nome='Fernanda'/>
      <SayMyName nome={nome}/>
      <SayMyName nome='Maria'/>
      <Pessoa nome="Thamires" idade="26" profissao="Programadora" foto="https:/via.placeholder.com/150"/>
    </div>
  )
}

export default App;
