import '../styles/todo.css'
import { Component } from 'react';


const Todo = () => {
    return(
        <div className='todo-container'>
            <p className='list-item'>Tarea por hacer</p>
            <button className='delete'>Eliminar Tarea</button>
        </div>
    )
};

export default Todo;