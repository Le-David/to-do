import React, { Dispatch, SetStateAction } from "react"
import { TodoItem } from "./TodoItem"
import styles from "../../styles/components/TodoList.module.sass"

interface TodoListProps {
  todos: Array<ITodo>
  setTodos: Dispatch<SetStateAction<Array<ITodo>>>
}

interface ITodo {
  text: string
  completed: boolean
  id: number
}

export const TodoList: React.FunctionComponent<TodoListProps> = ({
  todos,
  setTodos,
}) => {
  return (
    <div className={styles.todo}>
      <ul className={styles.list}>
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todos={todos}
            todo={todo}
            setTodos={setTodos}
          />
        ))}
      </ul>
    </div>
  )
}

export default TodoList
