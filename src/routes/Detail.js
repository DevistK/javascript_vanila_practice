import React from "react";
import { connect } from "react-redux";
import { actionCreator } from "../store";

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
  const {
    match: {
      params: { id },
    },
  } = ownProps;
  return { toDo: state.find((toDo) => toDo.id === parseInt(id)) };
}

function mapDispatchToProps(dispatch, ownProps) {
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
