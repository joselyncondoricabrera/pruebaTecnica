import { useState } from "react";
export const EditTask = (showModalStyle) => {

    const [changeStyleModal, setChangeStyleModal] = useState(showModalStyle)
    const saveEdit = () => {
     setChangeStyleModal("hidden-modal-edit");

    }


    return (
        <div className={changeStyleModal}>
            <h1>Editar Tarea</h1>
            <input className="input-edit"/>
            <input className="input-edit" />
            <button className="button-edit" type="button" onClick={()=>saveEdit()}>Editar</button>
            <button className="button-cancel" type="button">Cancelar</button>
        </div>
    );

}