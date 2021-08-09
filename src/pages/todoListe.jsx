/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react'
import { useCallback } from 'react'
import {
    // connect, 
    useDispatch, 
    useSelector
} from 'react-redux'
import { deleteTodoAction, toggleTodoAction } from '../store/todoActions'
import { todosSelector } from '../store/todosSelector'

function TodoItem({todo, onToggle, onDelete}){
    return(
        <li>
            <label>
                <input type="checkbox" checked={todo.completed} onChange={()=>onToggle(todo)}/>
                {todo.title}
                <button onClick={()=>onDelete(todo)}>X</button>
            </label>
        </li>
    )
}

export default function TodoListe({todos, onToggle, onDelete}) {
    return (
       <div>
           <ul>
               {
                   todos.map(todo=> <TodoItem key={todo.id} todo={todo} onToggle={onToggle} onDelete={onDelete} />)
               }
           </ul>
       </div>
    )
}

// Ou utilise Hook
//==============
// export default function TodoListe() {
//     const todos = useSelector(todosSelector)
//     const dispatch = useDispatch()
//     const onToggle = useCallback((todo)=>{
//         dispatch(toggleTodoAction(todo))
//     },[])
//     return (
//        <div>
//            <ul>
//                {
//                    todos.map(todo=> <TodoItem key={todo.id} todo={todo} onToggle={onToggle} />)
//                }
//            </ul>
//        </div>
//     )
// }

// OU

export function TodoListStore() {
    const todos = useSelector(todosSelector)
    const dispatch = useDispatch()
    const onToggle = useCallback((todo)=>{
        dispatch(toggleTodoAction(todo))
    },[])

    const onDelete = useCallback((todo)=>{
        dispatch(deleteTodoAction(todo))
    },[])
    return (
       <div>
           <TodoListe todos={todos} onDelete={onDelete} onToggle={onToggle} />
       </div>
    )
}

//==============//

// OU

// export const TodoListStore = connect(
//     (state) => ({
//         todos: todosSelector(state)
//     }),
//     (dispatch)=>({
//         onToggle: todo => dispatch(toggleTodoAction(todo))
//     })
// )(TodoListe)
