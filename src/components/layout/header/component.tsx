import { Link } from "react-router-dom";
import styles from "./header.module.scss";

const Header: React.FC = () => {

  return (
    <header className={styles.header}>
      <h1 className={styles.headerTitle}>
        <Link to={"/"}>
          Movie App
        </Link>
      </h1>
    </header>
  )
}

export default Header;