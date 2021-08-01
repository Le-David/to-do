import { useState, useEffect } from "react"
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
  const [status, setStatus] = useState("all")
  const [filteredTodos, setFilteredTodos] = useState<ITodo[]>([])

  const filterHandle = () => {
    switch (status) {
      case "completed":
        setFilteredTodos(todos.filter((todo) => todo.completed))
        break
      case "uncompleted":
        setFilteredTodos(todos.filter((todo) => !todo.completed))
        break
      default:
        setFilteredTodos(todos)
        break
    }
  }

  // "useEffect" filter array of todos everytime when new todo is submitted or new status is chosen.
  useEffect(() => {
    filterHandle()
  }, [todos, status])

  return (
    <div className={styles.wrapper}>
      <TodoForm
        setTodos={setTodos}
        todos={todos}
        setInputText={setInputText}
        inputText={inputText}
        setStatus={setStatus}
      />

      <TodoList
        filteredTodos={filteredTodos}
        todos={todos}
        setTodos={setTodos}
      />
    </div>
  )
}

export default TodoComponent
