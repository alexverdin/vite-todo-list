import '../styles/todolist.css';
import Todo from './Todo'; // tarea individual

const TodoList = () => {
  return (
    <div>
        <h1 className='todolist-header'>Este es un componente TodoList.</h1>
        <Todo />
        <Todo />
        {Array(3).fill( //llenamos un arreglo con 'n' componentes "<Todo />" usando "fill()"
            <Todo />
        )}
    </div>
  )
};

export default TodoList;