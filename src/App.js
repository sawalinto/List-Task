import React from "react";

import logo from "./logo.svg";
import FormInput from "./component/FormInput";
import TodoItem from "./component/TodoItem";
import "./App.css";
import EditModal from "./component/EditModal";

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
    isEdit: false,
    editData: {
      id: "",
      title: "",
    },
  };
  setTitle = (e) => {
    this.setState({
      editData: {
        ...this.state.editData,
        title: e.target.value,
      },
    });
  };

  deleteTask = (id) => {
    console.log("delete ok");
    this.setState({
      todos: this.state.todos.filter((item) => item.id !== id),
    });
  };

  addTask = (data) => {
    console.log(data);
    const id = this.state.todos.length;
    const newData = {
      id: id + 1,
      title: data,
    };
    this.setState({
      todos: [...this.state.todos, newData],
    });
  };

  update = () => {
    const { id, title } = this.state.editData;
    const newData = { id, title };
    const newTodos = this.state.todos;
    newTodos.splice(id - 1, 1, newData);
    this.setState({
      todos: newTodos,
      isEdit: false,
      editData:{
        id: "",
        title: ""
      }
    });
  };

  openModal = (id, data) => {
    this.setState({
      isEdit: true,
      editData: {
        id,
        title: data,
      },
    });
  };
  closeModal = () => {
    this.setState({
      isEdit: false,
    });
  };

  render() {
    const { todos } = this.state;
    return (
      <div className="App">
        <div className="logo">
          <img src={logo} alt="" width={150} />
          <h3>Task List</h3>
        </div>
        <div className="list">
          {todos.map((item) => (
            <TodoItem
              key={item.id}
              todo={item}
              del={this.deleteTask}
              open={this.openModal}
            />
          ))}
        </div>
        <div className="input-form">
          <FormInput add={this.addTask} />
        </div>
        <EditModal
          edit={this.state.isEdit}
          close={this.closeModal}
          data={this.state.editData}
          change={this.setTitle}
          update = {this.update}
        />
      </div>
    );
  }
}

export default App;
