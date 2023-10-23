import styles from "../styles/list-item.module.css";

export default function ListItem({ name, quantity }) {
  return (
    <div className={styles["list-item"]}>
      <p className={styles["list-item-text"]}>
        {name}, {quantity}
      </p>
      <label className={styles["label"]}>
        <input className={styles["checkbox"]} type="checkbox" id={name}></input>
      </label>
    </div>
  );
}
