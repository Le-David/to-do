import React, { Dispatch, SetStateAction } from "react"
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
  const deleteHandler = () => {
    setTodos(todos.filter((element) => element.id !== todo.id))
  }

  return (
    <div className={styles.wrapperItem}>
      <li className={styles.item}>{todo.text}</li>
      <button className={styles.btn_success}>
        <i className="fas fa-check-square"></i>
      </button>
      <button onClick={deleteHandler} className={styles.btn_trash}>
        <i className="fas fa-trash"></i>
      </button>
    </div>
  )
}

export default TodoItem
