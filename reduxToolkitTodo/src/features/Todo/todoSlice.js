import { createSlice, nanoid } from '@reduxjs/toolkit'

const initialState = {
    todos: [{id: 1, text: "hello world", isUpdate: false}],
}

export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTodo: (state, action)=> {
            const todo = {
                id: nanoid(), 
                text: action.payload,
                isUpdate: false,
            }
            state.todos.push(todo)
        },
        removeTodo: (state, action)=> {
            state.todos = state.todos.filter((todo)=> todo.id !== action.payload)
        },
        updateTodo: (state, action)=>{
            state.todos = state.todos.map((todo)=> todo.id === action.payload.id ? {...todo, text: action.payload.text, isUpdate: false} : todo)
        },
        toggleUpdate: (state, action)=>{
            state.todos = state.todos.map((todo)=> todo.id === action.payload.id ? {...todo, isUpdate: !todo.isUpdate} : todo)
        }
    },
})

export const { addTodo, removeTodo, updateTodo, toggleUpdate } = todoSlice.actions

export default todoSlice.reducer