import React from "react"
import styles from "../../styles/components/TodoItem.module.sass"

interface TodoItemProps {
  text: string
  completed: boolean
  id: number
}

export const TodoItem: React.FunctionComponent<TodoItemProps> = ({
  text,
  completed,
  id,
}) => {
  return (
    <div className={styles.wrapperItem}>
      <li className={styles.item}>{text}</li>
      <button className={styles.btn_success}>
        <i className="fas fa-check-square"></i>
      </button>
      <button className={styles.btn_trash}>
        <i className="fas fa-trash"></i>
      </button>
    </div>
  )
}

export default TodoItem
