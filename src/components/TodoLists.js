// import { useState } from 'react';
import { GoTrashcan } from 'react-icons/go';
import { BiCheckbox, BiCheckboxSquare } from 'react-icons/bi'

const TodoLists = ({ todos, onRemove, onCheck }) => {


  const todosList = todos.map((todo) => {
    let done;
    todo.complete ? done = { class: 'task-icon todo-done', box: <BiCheckboxSquare className='icon' /> }
      : done = { class: 'task-icon', box: <BiCheckbox className='icon' /> };

    return (
      <div className='todo-list' key={todo.id}>
        <div className={done.class} onClick={() => onCheck(todo)}>
          {done.box}
          {todo.task}
        </div>
        <div className='time-stamp'>
          {todo.date}
          <GoTrashcan onClick={() => onRemove(todo)} className='task-icon' />
        </div>
      </div>
    );
  });

  return (
    <>{todosList}</>
  )
}

export default TodoLists