//obtener de la api lista de tareas

const urlApi = 'https://flask-api-todo-fpc5.onrender.com/tarea';
// const urlApi = 'https://fakestoreapi.com/products';

export const getTasks = () => {
    
    return fetch(urlApi)
        .then((response) => {
            return response.json();
        })
        .catch((error) => {
            console.log(error);
        })
}

export const postTask = (data) => {
    console.log(data);
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ descripcion: data.description , estado: data.status })
    };

   return  fetch( urlApi, requestOptions)
        .then(response => response.json())
        .catch((error) => {
            console.log(error);
        })


}

export const deleteTask = (id_task) => {
    console.log(id_task);
    const requestOptions = { 
        method: 'DELETE'
    }
    return fetch(urlApi + `/${id_task}`, requestOptions)
    .then((response) => {
        return response.json();
    })
    .catch((error) => {
        console.log(error);
    })
}

export const updateTask = (id_task) => {
    // console.log(id_task.id);
    // const requestOptions = {
    //     method: 'PATCH',
    //     body: JSON.stringify(id_task)
    // };

    // return fetch(urlApi + `/${id_task.id}`,requestOptions)
    // .then((response)=> {
    //     return response.json();
    // })
    // .catch((error) => {
    //     console.log(error);
    // });

}