import styles from "../../styles/components/TodoForm.module.sass"

export const TodoForm = () => {
  return (
    <div className={styles.wrapper}>
      <form className={styles.form}>
        <input className={styles.input} placeholder="Add task..." type="text" />
        <button className={styles.submit} type="submit">
          <i className="fas fa-plus-square"></i>
        </button>
      </form>
    </div>
  )
}

export default TodoForm
