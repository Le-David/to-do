import React from "react"
import { TodoItem } from "./TodoItem"
import styles from "../../styles/components/TodoList.module.sass"

interface TodoListProps {
  todos: Array<ITodo>
}

interface ITodo {
  text: string
  completed: boolean
  id: number
}

export const TodoList: React.FunctionComponent<TodoListProps> = ({ todos }) => {
  return (
    <div className={styles.todo}>
      <ul className={styles.list}>
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            text={todo.text}
            completed={todo.completed}
            id={todo.id}
          />
        ))}
      </ul>
    </div>
  )
}

export default TodoList
