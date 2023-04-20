import React from 'react'

export const TaskLists = ({ taskList, setTaskList }) => {
  return (
    <>
      <div className='todo-list'>
        { taskList.map((task) => {
          return(
            <>
              { task.edit ? (
                <>
                  <div key={task.id}>
                    <form onSubmit={() => handleSubmit(task.id)}>
                      <input
                        autoFocus
                        type="text"
                        className='new-todo'
                        onChange={(e) => handleChange(e, task.id)}
                        value={task.text}
                        />
                    </form>
                    <button onClick={() => handleSubmit(task.id)}>保存</button>
                  </div>
                </>
              ) : (
                <>
                  <div key={task.id} className="taskList">
                    <input type="checkbox" className='checkbox' checked={task.completed} onChange={() => handleTodoClick(task.id)} />
                    {task.text}
                    <button className='edit' onClick={() => handleUpdate(task.id)}>編集</button>
                    <button className='delete' onClick={() => handleDelete(task.id)}>削除</button>
                  </div>
                </>
              )}
            </>
          )
        })}
      </div>
    </>
  )
}
