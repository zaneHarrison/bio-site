import styles from "../styles/list-title.module.css";

export default function ListTitle() {
  return (
    <div className={styles["title-box"]}>
      <h1 className={styles["title-text"]}>_______'s Shopping List</h1>
    </div>
  );
}
