import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid';
import TodoLists from '../components/TodoLists';
import TodoInput from '../components/TodoInput';

const TodoPage = () => {
  const [todos, setTodos] = useState([]);

  const date = new Date().toLocaleDateString();

  const handleCheck = ({ id, complete }) => {
    const rerenderedTodos = todos.map(todo => {
      if (todo.id === id) {
        return { ...todo, complete: !complete };
      }
      return todo;
    })
    setTodos(rerenderedTodos);
  };

  const handleRemoveTodo = ({ id }) => {
    const rerenderedTodos = todos.filter(todo => {
      return todo.id !== id;
    });
    setTodos(rerenderedTodos);
  };

  const handleSubmit = (input) => {
    setTodos(prev => [
      ...prev,
      { id: uuidv4(), task: input, complete: false, date: date }
    ]);
  };

  return (
    <section>
      <div className='todo-section'>
        <TodoInput onSubmit={handleSubmit} />
        <TodoLists todos={todos} onRemove={handleRemoveTodo} onCheck={handleCheck} />
      </div>
    </section>
  );
}

export default TodoPage;