import TodoForm from "./TodoForm"
import TodoList from "./TodoList"
import styles from "../../styles/components/TodoComponent.module.sass"

export const TodoComponent = () => {
  return (
    <div className={styles.wrapper}>
      <TodoForm />

      <TodoList />
    </div>
  )
}

export default TodoComponent
