import styles from "./header.module.scss";

const Header: React.FC = () => {

  return (
    <header className={styles.header}>
      <p className={styles.headerTitle}>Movie App</p>
    </header>
  )
}

export default Header;