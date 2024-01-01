import React from "react";

import logo from "./logo.svg";
import FormInput from "./component/FormInput";
import TodoItem from "./component/TodoItem";
import "./App.css";
import EditModal from "./component/EditModal";
import DeleteModal from "./component/DeleteModal";

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
    isDel:false,
    editData: {
      id: "",
      title: "",
    },
    delData:{
      id: ""
    }
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

    this.setState({
      todos: this.state.todos.filter((item) => item.id !== id),
      isDel: false,
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
      editData: {
        id: "",
        title: "",
      },
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
      isDel:false
    });
  };
  delModal = (id) => {
    this.setState({
      isDel: true,
      delData:{
        id,
      }
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
              hapusData = {this.delModal}
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
          update={this.update}
        />
        <DeleteModal
          delete={this.state.isDel}
          data={this.state.delData}
          del={this.deleteTask}
          // edit={this.state.isEdit}
          close={this.closeModal}
        />
      </div>
    );
  }
}

export default App;
