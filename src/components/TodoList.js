import React from 'react'
import TodoListItem from './TodoListitem'
import '../styles/TodoList.scss';

function TodoList({todos, onToggle, onRemove}) {
  return (
    <div className='TodoList'>
      {todos.map(todo=>(
        <TodoListItem 
          key = { todo.id }
          todo = { todo }
          onToggle = { onToggle }
          onRemove = { onRemove }
         />
      ))}
    </div>
  )
}

export default TodoList