import { createSlice, current } from "@reduxjs/toolkit";

// createSlice 로 기존 action , reducer Craete를 한번에 해줄 수 있다.
const toDos = createSlice({
  name: "toDosReducer",
  initialState: [],
  reducers: {
    add: (state, action) => {
      state.unshift({ text: action.payload, id: Date.now() });
    },
    remove: (state, action) => {
      const states = current(state);
      return states.filter((todo) => todo.id !== parseInt(action.payload));
    },
  },
});

export const { add, remove } = toDos.actions;

export default toDos.reducer;
