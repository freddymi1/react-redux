import { DELETE_TODO_ACTION, UPDATE_TODO_ACTION } from "./todoReducer";

export const toggleTodoAction = (todo) => ({
    type: UPDATE_TODO_ACTION,
    payload: {...todo, completed: !todo.completed}
})

export const deleteTodoAction = (todo) => ({
    type: DELETE_TODO_ACTION,
    payload: todo.id
})