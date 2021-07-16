import React from "react";
import { connect } from "react-redux";
import { actionCreator } from "../reducers/toDo";

function Detail({ toDo, onBtnClick, pageBack }) {
  if (toDo?.id === undefined) {
    pageBack();
  }
  return (
    <div>
      <h1>{toDo?.text}</h1>
      <h5>Create At : {toDo?.id}</h5>
      <button onClick={onBtnClick}>Del</button>
    </div>
  );
}

function mapStateToProps(state, ownProps) {
  const { toDoList } = state;
  const {
    match: {
      params: { id },
    },
  } = ownProps;
  const paramsId = parseInt(id);

  const toDos = toDoList.filter((list) => list.id === paramsId);
  return { toDo: toDos[0] };
}

function mapDispatchToProps(dispatch, ownProps) {
  console.log(ownProps);
  const {
    match: {
      params: { id },
    },
    history: { goBack },
  } = ownProps;
  return {
    onBtnClick: () => dispatch(actionCreator.deleteToDo(parseInt(id))),
    pageBack: goBack,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Detail);
