import '../styles/App.css';
import { Component } from 'react';
import Header from './Header';
import Form from './Form';
import TodoList from './TodoList';

class App extends Component{
  state = {
    todos:[]
  }

  componentDidMount() {
    this.setState({
      todos: [
        { title: "Tarea 1", done: true },
        { title: "Tarea 2", done: false },
        { title: "Tarea 3", done: true },
        { title: "Tarea 4", done: false },
        { title: "Tarea 5", done: true },
        { title: "Tarea 6", done: false },
        { title: "Tarea 7", done: true },
        { title: "Tarea 8", done: false },
        { title: "Tarea 9", done: true },
        { title: "Tarea 10", done: false },
      ],
      showButton: false,
      originalTodos: [
        { title: "Tarea 1", done: true },
        { title: "Tarea 2", done: false },
        { title: "Tarea 3", done: true },
        { title: "Tarea 4", done: false },
        { title: "Tarea 5", done: true },
        { title: "Tarea 6", done: false },
        { title: "Tarea 7", done: true },
        { title: "Tarea 8", done: false },
        { title: "Tarea 9", done: true },
        { title: "Tarea 10", done: false },
      ],
    })
  }

  handleClickDelete = (e, index) => {
    // dado que vamos a borrar elementos en el state, tenemos que copiar el state antes de modificarlo, o nos dará un error.
    const todos = [...this.state.todos] // Indispensable el spread Operator
    todos.splice(index, 1)

    this.setState({todos}) //abreviación de: this.setState({todos: todos})
  }

  handleClickToggleDone = (e, index) => {
    const todos = [...this.state.todos]
    todos[index].done = !todos[index].done
    this.setState({todos}) //abreviación de: this.setState({todos: todos})
  }

  handleClickReset = (e) => {
    this.setState({
      todos: [...this.state.originalTodos]
    })
  }


  render(){
    return (
      <div className="wrapper">
        <div className="card-frame">
          <Header counter={this.state.todos.length} />
          <TodoList
            tasks={this.state.todos}
            togglefn={this.handleClickToggleDone}
            deletefn={this.handleClickDelete}
          />
          <Form />
          <button onClick={this.handleClickReset}>Restore Tasks</button>
        </div>
      </div>
    )
  }
}

export default App;