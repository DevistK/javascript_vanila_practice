import React, { useState } from "react";
import { connect } from "react-redux";
import { actionCreator } from "../reducers/toDo";
import ToDo from "./ToDo";

function Home({ toDos, addToDo }) {
  const [text, setText] = useState("");
  function onChange(e) {
    setText(e.target.value);
  }
  function onSubmit(e) {
    e.preventDefault();
    addToDo(text);
    setText("");
  }
  return (
    <div>
      <h1>TO DO</h1>
      <form onSubmit={onSubmit}>
        <input type="text" value={text} onChange={onChange}></input>
        <button>Add</button>
      </form>
      <ul>
        {toDos.map((todos) => (
          <ToDo {...todos} key={todos.id} />
        ))}
      </ul>
    </div>
  );
}

function mapStateToProps(state) {
  return { toDos: state.toDoList };
}

function mapDispatchToProps(dispatch) {
  return { addToDo: (text) => dispatch(actionCreator.addToDo(text)) };
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
