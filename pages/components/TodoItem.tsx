import React, { Dispatch, SetStateAction } from "react"
import clsx from "clsx"
import styles from "../../styles/components/TodoItem.module.sass"

interface TodoItemProps {
  todos: Array<ITodo>
  todo: ITodo
  setTodos: Dispatch<SetStateAction<Array<ITodo>>>
}

interface ITodo {
  text: string
  completed: boolean
  id: number
}

export const TodoItem: React.FunctionComponent<TodoItemProps> = ({
  todos,
  todo,
  setTodos,
}) => {
  const completeHandler = () => {
    setTodos(
      todos.map((element) => {
        if (element.id === todo.id) {
          return { ...element, completed: !element.completed }
        }
        return element
      })
    )
  }

  const deleteHandler = () => {
    setTodos(todos.filter((element) => element.id !== todo.id))
  }

  return (
    <div
      className={clsx(
        styles.wrapperItem,
        todo.completed ? styles.isCompleted : ""
      )}
    >
      <li className={styles.item}>{todo.text}</li>
      <button onClick={completeHandler} className={styles.btn_success}>
        {todo.completed ? (
          <i className="fas fa-times"></i>
        ) : (
          <i className="fas fa-check-square"></i>
        )}
      </button>
      <button onClick={deleteHandler} className={styles.btn_trash}>
        <i className="fas fa-trash"></i>
      </button>
    </div>
  )
}

export default TodoItem
