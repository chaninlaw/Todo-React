import { useState } from 'react'
import { GoPlus } from 'react-icons/go';

const TodoInput = ({ onSubmit }) => {
  const [input, setInput] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setInput('');
    onSubmit(input);
  }

  return (
    <>
      <form className='form-control' onSubmit={handleSubmit}>
        <label htmlFor='input'>
          <h1 className='todo-heading'>#Todo</h1>
        </label>
        <div className='todo-input'>
          <input
            type="text"
            name="task"
            id='todo-input'
            onChange={e => setInput(e.target.value)}
            value={input || ''}
            placeholder='type todo and press enter.'
            autoFocus
            required
          />
          <GoPlus onClick={handleSubmit} className='plus-icon' />
        </div>
      </form>
    </>
  )
}

export default TodoInput