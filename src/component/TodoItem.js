import React from "react";
import Button from './Button';
import PropTypes from "prop-types";

const TodoItem = ({todo,hapusData, open})=>{
    
    return(
        <div style={todoItem}>
            <p>{todo.title}</p>
            <div>
                <Button text="edit" variant="success" action={()=> open(todo.id, todo.title)} />
                <Button text="delete" variant="warning" action={()=> hapusData(todo.id)}  />
                {/* <Button text="delete" variant="warning" action={()=>delById(todo.id)}  /> */}
            </div>
        </div>
    )
}

export default TodoItem;

TodoItem.propTypes={
    todo: PropTypes.object.isRequired,
    del: PropTypes.func.isRequired
  }

const todoItem = {
    background: "#2da4f8",
    color:"#fff",
    display:"flex",
    alignItems: "center",
    height:"3rem",
    padding: "0 1rem",
    justifyContent: "space-between",
    margin: "0.5 rem  0",
    marginBottom: "5px"
    
}