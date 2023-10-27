import '../styles/todolist.css';
import PropTypes from 'prop-types';
import Todo from './Todo'; // tarea individual

const TodoList = ({tasks, togglefn, deletefn}) => {
  return (
    <div style={{padding: '5px 0'}}>
        <h1 className='todolist-header'>Este es un componente TodoList.</h1>

        {
          tasks.map((elem, index) => 
            <Todo
              key={index}
              done={elem.done}
              title={elem.title}
              deletefn={(e) => deletefn(e, index)}
              togglefn={(e) => togglefn(e, index)}
            />
          )
        }
    </div>
  )
};

TodoList.propTypes = {
  tasks: PropTypes.array,
  togglefn: PropTypes.func.isRequired,
  deletefn: PropTypes.func.isRequired
}

TodoList.defaultProps = {
  tasks: []
}

export default TodoList;