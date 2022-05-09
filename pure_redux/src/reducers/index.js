import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import toDo from "./toDo";

const persistConfig = {
  key: "root",
  // localStorage에 저장
  storage,
  // 원하는 reducer 만 localstorage에 저장
  whitelist: ["toDoList"],
  // blacklist -> 그것만 제외
};

const rootReducer = combineReducers({
  toDoList: toDo,
});

export default persistReducer(persistConfig, rootReducer);
