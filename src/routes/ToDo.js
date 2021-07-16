import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { actionCreator } from "../reducers/toDo";

function ToDo({ text, id, onBtnClick }) {
  return (
    <li>
      <Link to={`/${id}`}>{text}</Link>
      <button onClick={onBtnClick}>Del</button>
    </li>
  );
}

function mapDispatchToProps(dispatch, ownProps) {
  return { onBtnClick: () => dispatch(actionCreator.deleteToDo(ownProps.id)) };
}

export default connect(null, mapDispatchToProps)(ToDo);
