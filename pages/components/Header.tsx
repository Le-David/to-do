import styles from "../../styles/components/Header.module.sass"

export const Header = () => {
  return (
    <header className={styles.header}>
      <h1 className={styles.title}>David's TO-DO list</h1>
    </header>
  )
}

export default Header
