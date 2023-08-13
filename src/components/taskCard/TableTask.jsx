import React,{ useEffect, useState } from "react";

export const TableTask = () => {

    const [task, setTask] = useState([]);


    useEffect(()=> {
        fetch('https://flask-api-todo-fpc5.onrender.com/tarea')
      .then((response) => {
        return response.json()
      })
      .then((task) => {        
        setTask(task.content);
        // console.log(task.content);
      })
    },[]);

    const editTask = (id) => {
        
    };

    const completeTask = () => {

    }
    const deleteTask = (id) => {
        // const requestOptions = {
        //     method: 'DELETE'
        // }

        // fetch(`https://flask-api-todo-fpc5.onrender.com/tarea/${id}`, requestOptions)
        //     .then((response) => {
        //         console.log("se elimino correctamente");

        //     });
        console.log(id);
    }


    return(
        <table className="table-task">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>DESCRIPCIÓN</th>
                    <th>ESTADO</th>
                    <th>...</th>
                </tr>
            </thead>

            <tbody>
                {task.map((t,id )=> (
                    <tr key={id}>
                        <td>{t.id}</td>
                        <td>{t.descripcion}</td>
                        <td>check</td>
                        <td className="content-button-action">
                            <button className="button-action btn-edit" type="button" onClick={()=> editTask(id)}>Editar</button>
                            <button className="button-action btn-complete" type="button" onClick={() => completeTask()}>Completar</button>
                            <button className="button-action btn-delete" type="button" onClick={() => deleteTask(id)}>Eliminar</button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}