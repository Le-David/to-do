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

  // save todos to local storage
  const setDataToLocal = (data: Array<ITodo>) => {
    localStorage.setItem("data", JSON.stringify(data))
  }

  // get todos from local storage
  const getDataFromLocal = () => {
    const data = localStorage.getItem("data")
    let localData: Array<ITodo> = []
    if (localStorage.getItem("data") === null) {
      setDataToLocal([])
    } else {
      localData = JSON.parse(data ?? "")
    }
    setTodos(localData)
  }

  // get local data only on 1. render of page
  useEffect(() => {
    getDataFromLocal()
  }, []) // second argument (an empty array) says that everything inside "useEffect" will be rendered only once

  // "useEffect" filter array of todos everytime when new todo is submitted or new status is chosen.
  useEffect(() => {
    filterHandle()
    setDataToLocal(todos)
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
