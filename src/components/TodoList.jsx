import '../styles/todolist.css';
import PropTypes from 'prop-types';
import Todo from './Todo'; // tarea individual

const TodoList = ({tasks}) => {
  return (
    <div style={{padding: '5px 0'}}>
        <h1 className='todolist-header'>Este es un componente TodoList.</h1>

        {
          tasks.map((elem, index) => 
            <Todo
              key={index}
              done={elem.done}
              title={elem.title}
            />
          )
        }
    </div>
  )
};

TodoList.propTypes = {
  tasks: PropTypes.array
}

TodoList.defaultProps = {
  tasks: []
}

export default TodoList;