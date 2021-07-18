import { createAction } from "@reduxjs/toolkit";

// action creator
// toolkit 사용으로 간소화된 actionCreator
// 반복되어서 쓰이던 코드가 사라짐 , payload 안에 담김
const addToDo = createAction("ADD", (text) => {
  return {
    payload: {
      text,
      id: Date.now(),
    },
  };
});

const deleteToDo = createAction("DELETE", (id) => {
  return {
    payload: {
      id: parseInt(id),
    },
  };
});

const reducer = (state = [], action) => {
  switch (action.type) {
    case addToDo.type:
      return [{ text: action.payload.text, id: action.payload.id }, ...state];
    case deleteToDo.type:
      return state.filter((toDo) => toDo.id !== action.payload.id);
    default:
      return state;
  }
};

export const actionCreator = {
  addToDo,
  deleteToDo,
};

export default reducer;
