import React from "react";
import Button from "./Button";
import '../styles/FormInput.css';

class FromInput extends React.Component{
    state={
        text:""
    }
    change = e=> {
        this.setState({
            text: e.target.value
        })
    }
    submit =e=>{
        e.preventDefault()
        if(this.state.text !== ""){
            this.props.add(this.state.text)
            this.setState({
                text:""
            })
        }
       
    }

    render(){
        return(
         <form style={inputForm} onSubmit={this.submit}>
            <input type="text" value={this.state.text} style={input} onChange={this.change} placeholder="add task" />
            <Button text="add" action={this.submit} variant="primary"  />
         </form>
        )
    }
}

export default FromInput;

const inputForm={
    background: "#fff",
    color:"#fff",
    display:"flex",
    alignItems: "center",
    height:"3rem",
    padding: "0 1rem",
    justifyContent: "space-between",
    margin: "0.5 rem  0"
}

const input ={
    width: "70%",
    border: "none"
    
}