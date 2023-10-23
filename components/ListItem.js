export default function ListItem({ name, quantity }) {
  return (
    <div>
      <p>
        {name} - {quantity}
      </p>
    </div>
  );
}
