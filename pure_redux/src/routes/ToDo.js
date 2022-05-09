import { current } from "@reduxjs/toolkit";
import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { remove } from "../reducers/toDo";

function ToDo({ text, id, onBtnClick }) {
  return (
    <li>
      <Link to={`/${id}`}>{text}</Link>
      <button onClick={onBtnClick}>Del</button>
    </li>
  );
}

function mapDispatchToProps(dispatch, ownProps) {
  return { onBtnClick: () => dispatch(remove(ownProps.id)) };
}

export default connect(null, mapDispatchToProps)(ToDo);
