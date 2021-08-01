import React, { Dispatch, SetStateAction } from "react"
import { TodoItem } from "./TodoItem"
import styles from "../../styles/components/TodoList.module.sass"

interface TodoListProps {
  todos: Array<ITodo>
  setTodos: Dispatch<SetStateAction<Array<ITodo>>>
  filteredTodos: Array<ITodo>
}

interface ITodo {
  text: string
  completed: boolean
  id: number
}

export const TodoList: React.FunctionComponent<TodoListProps> = ({
  todos,
  setTodos,
  filteredTodos,
}) => {
  return (
    <div className={styles.todo}>
      <ul className={styles.list}>
        {filteredTodos.map((todo) => (
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
