import dadosJSON from'./dados.json'
import Livro from './components/Livro'
import './App.css'; 
function App() {
  return (
      <div className='container'>

      <Livro dadosJSON={dadosJSON} />
      </div>
   
  );
}

export default App;
