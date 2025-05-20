import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {removeTodo} from '../features/Todo/todoSlice'

function Todos() {

  useSelector(state => useSelector(state => state.todos))
  const dispatch = useDispatch()

  return (
    <div>Todos</div>
  )
}

export default Todos