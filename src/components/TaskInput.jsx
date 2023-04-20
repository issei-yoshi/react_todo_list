import React from 'react'

export const TaskInput = ({ inputText, setInputText, taskList, setTaskList }) => {
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
