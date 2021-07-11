import React, { Dispatch, SetStateAction, MouseEvent } from "react"
import styles from "../../styles/components/TodoForm.module.sass"

interface TodoFormProps {
  setInputText: Dispatch<SetStateAction<string>>
  inputText: string
  todos: Array<ITodo>
  setTodos: Dispatch<SetStateAction<Array<ITodo>>>
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
      </form>
    </div>
  )
}
