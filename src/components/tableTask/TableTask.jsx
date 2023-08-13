import React,{ useEffect, useState } from 'react';
import {getTasks, deleteTask, updateTask } from '../../request/requestApi';
import {EditTask} from '../modals/EditTask';
import Swal from 'sweetalert2';

export const TableTask = () => {
    const [task, setTask] = useState([]);
    const [valueCheckbox, setValueCheckbox] = useState(false);
    const [changeStyleModal, setChangeStyleModal] = useState('hidden-modal-edit');

    useEffect(() => {
        getTasks()
        .then((response)=>{
            setTask(response.content);
        });
    }, []);

    const editTask = (task) => {
        updateTask(task);
        setChangeStyleModal('show-modal-edit');
    };

    const completeTask = (id) => {
        setValueCheckbox(true);
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
                        getTasks()
                            .then((response) => {
                                console.log(response);
                                setTask(response.content);
                            });

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
            <EditTask showModalStyle = {changeStyleModal}/>
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
                                <input className="input-checkbox" type='checkbox' checked={valueCheckbox === true ? true : false} />
                            </td>
                            <td className="content-button-action">
                                <button className="button-action btn-edit" type="button" onClick={() => editTask(t)}>Editar</button>
                                <button className="button-action btn-complete" type="button" onClick={() => completeTask(t.id)}>Completar</button>
                                <button className="button-action btn-delete" type="button" onClick={() => deleteTaskItem(t.id)}>Eliminar</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}