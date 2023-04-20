import React, { useState } from 'react'

import { TaskInput } from './TaskInput'
import { TaskLists } from './TaskLists'
import { Footer } from './Footer'

export const Tasks = () => {
  const [inputText, setInputText] = useState("");
  const [taskList, setTaskList] = useState([]);

  return (
    <div>
      <TaskInput
        inputText={inputText}
        setInputText={setInputText}
        taskList={taskList}
        setTaskList={setTaskList}
      />
      <TaskLists
        taskList={taskList}
        setTaskList={setTaskList}
      />
      <Footer />
    </div>
  )
}
