import styles from "../../styles/components/TodoList.module.sass"

export const TodoList = () => {
  return (
    <div className={styles.todo}>
      <ul className={styles.list}>
        <div className={styles.wrapperItem}>
          <li className={styles.item}>test</li>
          <button className={styles.btn_success}>
            <i className="fas fa-check-square"></i>
          </button>
          <button className={styles.btn_trash}>
            <i className="fas fa-trash"></i>
          </button>
        </div>
      </ul>
    </div>
  )
}

export default TodoList
