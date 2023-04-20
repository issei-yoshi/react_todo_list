import React from 'react'

export const Footer = ({ taskList }) => {
  const allTask = [...taskList].length

  const completeTask = [...taskList].filter((task) => task.completed === true).length;

  const incompleteTask = allTask - completeTask;

  return (
    <div className='footer'>
      <p>全てのタスク:{allTask}  完了済み:{completeTask}  未完了:{incompleteTask}です</p>
    </div>
  )
}
