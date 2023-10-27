import '../styles/todo.css'
import { Component } from 'react';
import PropTypes from 'prop-types';
import CheckMark from './CheckMark';

// componente 'React' de Clase
class Todo extends Component {
    /*
    state={
        done: false,
    }
    
    todoElement = () => {
        return(
            <>
                <p className='list-item'>Tarea por hacer</p>
                <button onClick={()=> {this.setState({done: true})}} className='delete-btn'>Terminado</button>
            </>
        )
    }
    render(){
        return(
            <div className={`todo-container ${this.state.done ? 'dim-completed' : ''}`}>
                {this.todoElement()}
            </div>
        )
    }
    */

    render(){
        return(
            <div className={`todo-container ${this.props.done ? 'dim-completed' : ''}`}>

                <CheckMark done={this.props.done} />
                <p className='list-item'>{this.props.title}</p>
                <button className='delete-btn'>Listo</button>
            </div>
        )
    }
}

// Define el tipo de valor a recibir por cada prop definida dentro de Class.propTypes
Todo.propTypes = {
    done: PropTypes.bool,
    title: PropTypes.string.isRequired
}

export default Todo;