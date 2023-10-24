// This component represents the title of the shopping list

// Here we're importing CSS styles to be used in this component
import styles from "../styles/list-title.module.css";

export default function ListTitle() {
  // The HTML being returned by this component consists of a title (<h1> tag) inside of a generic container (<div> tag)
  return (
    <div className={styles["title-box"]}>
      <h1 className={styles["title-text"]}>_______'s Shopping List</h1>
    </div>
  );
}
