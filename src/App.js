import React from 'react';
import './App.css';
import { connect } from 'react-redux'
// import TodoAction from './Action/actionTodo';
import TodoMiddleware from './Middleware/todoMiddleware';


const App = (props) => {
  console.log(props)
  
     return (
       <div className="App">
         <h1>Hello World</h1>
       </div>
     )
   }
  
    


const mapStateToProps = (state) => {
  return {
    ...state,
    todos: state.TodoReducer.todos
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getTodo: (data)=>{dispatch(TodoMiddleware.getTodo(data))}
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
