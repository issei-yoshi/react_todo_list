import React from 'react'

import { TaskInput } from './TaskInput'
import { TaskLists } from './TaskLists'
import { Footer } from './Footer'

export const Tasks = () => {
  return (
    <div>
      <TaskInput />
      <TaskLists />
      <Footer />
    </div>
  )
}
