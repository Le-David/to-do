import styles from "../../styles/components/Container.module.sass"

export const Container: React.FunctionComponent = ({ children }) => {
  return <div className={styles.container}>{children}</div>
}
