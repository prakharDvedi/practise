import styles from "./navbar.module.css";

export default function Navbar() {
  return (
    <div className={styles.navbar}>
      <div className={styles.left}>
        <h1>About</h1>
        <h1>Contact</h1>
      </div>
      <div className={styles.right}>
        <h1>Help</h1>
      </div>
    </div>
  );
}
