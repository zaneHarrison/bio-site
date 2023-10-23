import styles from "../styles/list.module.css";

export default function List() {
  const items = [
    {
      name: "Item name",
      quantity: "Amount",
    },
  ];

  return <div className={styles.list}></div>;
}
