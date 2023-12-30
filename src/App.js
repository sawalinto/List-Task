import React from "react";

import logo from "./logo.svg";
import FormInput from "./component/FormInput";
import TodoItem from "./component/TodoItem";
import "./App.css";

class App extends React.Component {
  state = {
    todos: [
      {
        id: 1,
        title: "reading a book",
      },
      {
        id: 2,
        title: "wordkout training",
      },
    ],
  };

  deleteTask =id=>{
    console.log("delete ok");
    this.setState({
      todos: this.state.todos.filter(item=>item.id !== id)
    })
  }

  addTask = data=>{
    console.log(data)
    const id = this.state.todos.length
    const newData={
      id: id + 1,
      title: data,
    }
    this.setState({
      todos:[...this.state.todos, newData]
    })
  }

  render() {
    const { todos } = this.state;
    return (
      <div className="App">
        <div className="logo">
          <img src={logo} alt="" width={150} />
          <h3>Task List</h3>
        </div>
        <div className="list">
          {todos.map(item=>
            <TodoItem key={item.id}  todo={item} del={this.deleteTask}/>
            )}
        </div>
        <div className="input-form">
          <FormInput add={this.addTask}/>
        </div>
      </div>
    );
  }
}



export default App;
