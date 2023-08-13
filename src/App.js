import { TableTask } from './components/taskCard/TableTask';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Lista de Tareas</h1>
      <input />
      <button className='button-save'>Guardar</button>
      <TableTask/>
    </div>
  );
}

export default App;
