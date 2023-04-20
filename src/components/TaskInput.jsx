import React from 'react'

export const TaskInput = ({ inputText, setInputText, taskList, setTaskList }) => {
  const handleChange = (e) => {
    setInputText(e.target.value);
  }

  const handleSubmit = () => {
    
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder='ここにタスクを入力'
          onChange={handleChange}
          value={inputText}
        />
      </form>
    </div>
  )
}
