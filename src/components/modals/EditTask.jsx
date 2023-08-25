import { useState } from "react";


export const EditTask = ({isOpen , closeModal, valueTask}) => {
    // console.log("task", valueTask );
    const [selectedTask, setSelectedTask] = useState({id:"" ,descripcion: "", estado : "" });

    // console.log(selectedTask);

    const saveEdit = () => {

    }

    const cancelEdit = () => {
        closeModal();
    }

    return (
        <div className = {`modal ${ isOpen ? 'is-open' : 'modal'}`}>
            <div className="modal-edit">
                <div className="container-form">
                    <h1>Editar Tarea</h1>
                    <label>Id:</label>
                    <input className="input-edit" type="text" value={valueTask.id} onChange={()=>{}} />
                    <label>Descripcion:</label>
                    <input className="input-edit" type="text" value={valueTask.descripcion } onchange={(t)=>{console.log(t)}} />
                    <label>Estado:</label>
                    <input className="input-edit" type="text" value={valueTask.estado} />
                </div>
                <div className="container-button">
                    <button className="button-edit" type="button" onClick={() => saveEdit()}>Guardar</button>
                    <button className="button-cancel" type="button" onClick={()=> {cancelEdit()}}>Cancelar</button>
                </div>

            </div>
        </div>
    );

}