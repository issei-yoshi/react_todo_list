import React from 'react'

export const TaskLists = ({ taskList, setTaskList }) => {

  const handleDelete = (id) => {
    let res = window.confirm("本当によろしいですか？")
    if(res){
      const newTaskList = taskList.filter((task) => task.id !== id);
      setTaskList(newTaskList);
    }
  }

  const handleUpdate = (id) => {
    const tasks =  [...taskList];
    const task = tasks.find((task) => task.id == id);
    task.edit = !task.edit;
    setTaskList(tasks);
  }

  const handleSubmit = (id) => {
    const newTasks = [...taskList];
    const task = newTasks.find((task) => task.id === id);
    task.edit = false;
    setTaskList(newTasks);
  }

  const handleChange = (e, id) => {
    const newTasks = [...taskList];
    const task = newTasks.find((task) => task.id === id);
    task.text = e.target.value;
      setTaskList(newTasks);
  }

  const handleTodoClick = (id) => {
    const newTasks = [...taskList];
    const task = newTasks.find((task) => task.id === id);
    task.completed = !task.completed;
    setTaskList(newTasks);
  }

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
