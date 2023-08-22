import { useEffect, useState } from "react";


export const EditTask = ({isOpen , closeModal}) => {
//    const [showModal, setShowModal] = useState('container-modal');
//    console.log(showModal);
//    setShowModal('container-modal');


    const saveEdit = () => {
    }

    const cancelEdit = () => {
    //   setShowModal('hidden-modal');
    closeModal();
    }

    // useEffect(()=>{
    //     setShowModal('container-modal');
    // }, []);


    return (
        <div className = {`modal ${ isOpen ? 'is-open' : 'modal'}`}>
            <div className="modal-edit">
                <div className="container-form">
                    <h1>Editar Tarea</h1>
                    <input className="input-edit" />
                    <input className="input-edit" />
                </div>
                <div className="container-button">
                    <button className="button-edit" type="button" onClick={() => saveEdit()}>Editar</button>
                    <button className="button-cancel" type="button" onClick={()=> {cancelEdit()}}>Cancelar</button>
                </div>

            </div>
        </div>
    );

}