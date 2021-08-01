import React, { Dispatch, SetStateAction, MouseEvent } from "react"
import styles from "../../styles/components/TodoForm.module.sass"

interface TodoFormProps {
  setInputText: Dispatch<SetStateAction<string>>
  inputText: string
  todos: Array<ITodo>
  setTodos: Dispatch<SetStateAction<Array<ITodo>>>
  setStatus: Dispatch<SetStateAction<string>>
}
interface ITodo {
  text: string
  completed: boolean
  id: number
}

export const TodoForm: React.FunctionComponent<TodoFormProps> = ({
  setInputText,
  inputText,
  setTodos,
  todos,
  setStatus,
}) => {
  const inputTextHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputText(event.target.value)
  }

  const submitHandler = (event: MouseEvent) => {
    event.preventDefault()

    if (inputText) {
      setTodos([
        ...todos,
        {
          text: inputText,
          completed: false,
          id: Math.random() * 1000,
        },
      ])
      setInputText("")
    } else {
      alert("Don't be lazy. Add some task!!!")
    }
  }

  const statusHandler = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setStatus(event.target.value)
  }

  return (
    <div className={styles.wrapper}>
      <form className={styles.form}>
        <input
          value={inputText}
          onChange={inputTextHandler}
          className={styles.input}
          placeholder="Add task..."
          type="text"
        />
        <button onClick={submitHandler} className={styles.submit} type="submit">
          <i className="fas fa-plus-square"></i>
        </button>
        <div className={styles.select}>
          <select
            onChange={statusHandler}
            className={styles.selectIn}
            name="filter"
            id="filter"
          >
            <option value="all">All</option>
            <option value="completed">Completed</option>
            <option value="uncompleted">Uncompleted</option>
          </select>
          <div className={styles.arrow}>
            <i className="fas fa-chevron-down"></i>
          </div>
        </div>
      </form>
    </div>
  )
}
