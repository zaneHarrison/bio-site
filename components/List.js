// This component represents the whole shopping list

// Here we're importing CSS styles to be used in this component
import styles from "../styles/list.module.css";

export default function List() {
  // Here's our shopping list data, which is represented as a list of objects in which each object has two properties, "name" and "quantity". You should expand this list to fill it with realistic shopping items
  const items = [
    {
      name: "Item name",
      quantity: "Amount",
    },
  ];

  // This is the HTML being returned by the List component. We want our list to contain the items in the "items" list above
  return <div className={styles.list}></div>;
}
