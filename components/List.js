import styles from "../styles/list.module.css";

export default function List() {
  const items = [
    "Milk",
    "Eggs",
    "Cereal",
    "Apples",
    "Bread",
    "Carrots",
    "Donuts",
    "Orange juice",
    "Spinach",
    "Avocados",
    "Chocolate",
    "Beer",
  ];

  return (
    <div className={styles.list}>
      {items.map((item) => {
        return <p>{item}</p>;
      })}
    </div>
  );
}
