import React, { useState } from 'react'

import { TaskInput } from './TaskInput'
import { TaskLists } from './TaskLists'
import { Footer } from './Footer'

export const Tasks = () => {
  const [inputText, setInputText] = useState("");

  return (
    <div>
      <TaskInput />
      <TaskLists />
      <Footer />
    </div>
  )
}
