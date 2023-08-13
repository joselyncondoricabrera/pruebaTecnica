import { TableTask } from './components/tableTask/TableTask';
import { useEffect, useState } from 'react';
import  { postTask, getTasks} from '../src/request/requestApi'; 
import Swal from 'sweetalert2';
import './App.css';

function App() {

  const saveTask = async () => {

    // llamando a modal 
    let dataInput = '';
    Swal.fire({
      title: 'Ingresar nueva tarea',
      input: 'text',
      inputLabel: 'Descripción',
      inputValue: '',
      showCancelButton: true,
      inputValidator: (value) => {
        console.log(value);
        dataInput= value;
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

        console.log("eliminando");
        const data = {
          description: dataInput,
          status: 'pendiente'
        } 
        postTask(data)
        .then((response) => {
          console.log(response);
          getTasks();
          window.location.reload();
        });

      }
    });

  }

  return (
    <div className="App">
      <h1 className='h1-title'>Lista de Tareas</h1>
      <input className="input-search" type='text' placeholder='Buscar Tarea.....'/>
      <button className='button-save' type='button' onClick={()=> saveTask()}>Guardar Tarea Nueva</button>
      <TableTask  />
    </div>
  );
}

export default App;
