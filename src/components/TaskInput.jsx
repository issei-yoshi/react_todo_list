import React from 'react'
import { v4 as uuid } from 'uuid';

export const TaskInput = ({ inputText, setInputText, taskList, setTaskList }) => {
  const handleChange = (e) => {
    setInputText(e.target.value);
  }

  const handleSubmit = (e) => {
    const taskId = uuid();

    e.preventDefault();
    if (inputText == "") {
      return
    }
    setTaskList([
      ...taskList,
      {
        id: taskId,
        text: inputText,
        completed: false,
        edit: false,
      }
    ]);
    setInputText("");
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          className='new-todo'
          placeholder='ここにタスクを入力'
          onChange={handleChange}
          value={inputText}
        />
      </form>
    </div>
  )
}
