import { combineReducers, createStore } from "redux"
import todosReducer from "./todoReducer"



// const state = TodoReducer(undefined, {})
// const newState = TodoReducer(state, {type: ADD_TODO_ACTION, payload: {title: "Demo reducer"}})
// console.log(state, newState)

export default createStore(
  combineReducers({
    todos: todosReducer,
    filter: (state=0, action)=> state
  }),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)