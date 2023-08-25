import React,{ useState } from 'react';
import { EditTask } from '../modals/EditTask';
import {deleteTask} from '../../request/requestApi';
import { useModal } from '../modals/useModal';
import Swal from 'sweetalert2';

export const TableTask = ( {task} ) => {
    const [isOpenModal1, openModal1, closeModal1] = useModal(false);
   
    const [selectTask, setSelectTask] = useState({});

    const editTask = (t) => {
        console.log(t);
         //tarea seleccionada de la tabla
        setSelectTask(t);
        
        openModal1();
    };

    const completeTask = (id) => {
        // setValueCheckbox(true);
        // console.log(valueCheckbox);
    }
    const deleteTaskItem = (id) => {
        Swal.fire({
            title: 'Deseas eliminar esta tarea?',
            showCancelButton: true,
            confirmButtonText: 'Eliminar',
        }).then((result) => {
            if (result.isConfirmed) {
                deleteTask(id)
                    .then((response) => {
                        console.log(response);
                        // traer data de la api para mostrar
                        // getTasks()
                        //     .then((response) => {
                        //         console.log(response);
                        //         setTask(response.content);
                        //     });

                    });
                Swal.fire('Eliminado correctamente!', '', 'success')
            } 
        })

    }

    // const changeCheckbox = (e) => {
    //     // setValueCheckbox(true);
    //     console.log(e.target.checked);

    // }

 

    return(
        <div> 
            <table className="table-task">
                <thead className='head-table'>
                    <tr>
                        <th className='row-table-task'>ID</th>
                        <th className='row-table-task'>DESCRIPCIÓN</th>
                        <th className='row-table-task'>ESTADO</th>
                        <th className='row-table-task'>...</th>
                    </tr>
                </thead>

                <tbody>
                    {task.map((t, id) => (
                        <tr key={id}>
                            <td>{t.id}</td>
                            <td>{t.descripcion}</td>
                            {/* <td>{t.title}</td> */}
                            <td>
                                {/* <input className="input-checkbox" type='checkbox' checked={valueCheckbox === true ? true : false} /> */}
                            </td>
                            <td className="content-button-action">
                                <button className="button-action btn-edit"  onClick={()=> {editTask(t)}}>Editar</button>
                                <button className="button-action btn-complete" type="button" onClick={() => completeTask(t.id)}>Completar</button>
                                <button className="button-action btn-delete" type="button" onClick={() => deleteTaskItem(t.id)}>Eliminar</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            <div>
             <EditTask isOpen = {isOpenModal1}  closeModal= {closeModal1} valueTask={selectTask} />
            </div>
        </div>
    );
}