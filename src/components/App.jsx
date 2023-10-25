import '../styles/App.css';
import Header from './Header';
import Form from './Form';
import TodoList from './TodoList';

const App = () =>{
  return (
    <div className="wrapper">
      <div className="card-frame">
        <Header cant={15} />
        <Form />
        <TodoList />
      </div>
    </div>
  )
};

export default App;


/**
 * todo
 * todo-list
 */