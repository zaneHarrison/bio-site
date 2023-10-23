import styles from "../styles/list.module.css";
import ListItem from "./ListItem";

export default function List() {
  const items = [
    {
      name: "Milk",
      quantity: 1,
    },
    {
      name: "Eggs",
      quantity: 12,
    },
    {
      name: "Cereal",
      quantity: 1,
    },
    {
      name: "Apples",
      quantity: 4,
    },
    {
      name: "Bread",
      quantity: 1,
    },
    {
      name: "Carrots",
      quantity: 3,
    },
    {
      name: "Donuts",
      quantity: 6,
    },
    {
      name: "Orange juice",
      quantity: 1,
    },
    {
      name: "Spinach",
      quantity: 1,
    },
    {
      name: "Avocados",
      quantity: 2,
    },
  ];

  return (
    <div className={styles.list}>
      {items.map((item) => {
        return <ListItem name={item.name} quantity={item.quantity} />;
      })}
    </div>
  );
}
