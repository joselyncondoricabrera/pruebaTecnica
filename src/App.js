import { TableTask } from './components/taskCard/TableTask';
import Swal from 'sweetalert2'
import './App.css';

function App() {
  const saveTask = async () => {

    // llamando a modal 
    Swal.fire({
      title: 'Ingresar nueva tarea',
      input: 'text',
      inputLabel: 'Descripción',
      inputValue: '',
      showCancelButton: true,
      inputValidator: (value) => {
        if (!value) {
          return 'Ingrese algún dato!'
        }
      }
    }).then((result) => {
      if (result.isConfirmed) {
        //modal de confirmación
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Se guardó el registro correctamente',
          showConfirmButton: false,
          timer: 2000
        })

        // guardar  la tarea  llamando endpoint
        const requestOptions = {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ descripcion: 'Nueva Tarea', estado: 'pendiente' })
        };

        fetch('https://flask-api-todo-fpc5.onrender.com/tarea', requestOptions)
          .then(response => response.json())
          .then((result) => {
            console.log(result);
          });

      }
    });

  }

  return (
    <div className="App">
      <h1>Lista de Tareas</h1>
      <input />
      <button className='button-save' type='button' onClick={()=> saveTask()}>Guardar</button>
      <TableTask/>
    </div>
  );
}

export default App;
