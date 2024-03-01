import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
function App() {

  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  function Cadastro(e){
    alert(`${name} ${email} ${password}`)
  }

  return (
    <div className="App">
      <form onSubmit={Cadastro} className='form'>
        <h1> formulario de cadastro</h1>
        
        <input type='text' onChange={(e)=> setName(e.target.value)} value={name} placeholder='digite seu nome aqui' required></input> 
     
        <input type='email' onChange={(e)=> setEmail(e.target.value)} value={email} placeholder='digite seu email' required></input> 
      
        <input type='password' onChange={(e)=> setPassword(e.target.value)} value={password} placeholder='digite sua senha' required></input>  
      
        <button>Cadastrar</button>
      </form>
    </div>
  );
}

export default App;
