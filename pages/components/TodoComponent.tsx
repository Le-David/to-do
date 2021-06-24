import { useState } from "react"
import { TodoForm } from "./TodoForm"
import { TodoList } from "./TodoList"
import styles from "../../styles/components/TodoComponent.module.sass"

interface ITodo {
  text: string
  completed: boolean
  id: number
}

export const TodoComponent = () => {
  const [inputText, setInputText] = useState("")
  const [todos, setTodos] = useState<ITodo[]>([])

  return (
    <div className={styles.wrapper}>
      <TodoForm
        setTodos={setTodos}
        todos={todos}
        setInputText={setInputText}
        inputText={inputText}
      />

      <TodoList todos={todos} />
    </div>
  )
}

export default TodoComponent
