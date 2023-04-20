import React from 'react'

export const Footer = ({ taskList }) => {
  const allTask = [...taskList].length

  const completeTask = [...taskList].filter((task) => task.completed === true).length;

  const incompleteTask = allTask - completeTask;

  return (
    <div>Footer</div>
  )
}
