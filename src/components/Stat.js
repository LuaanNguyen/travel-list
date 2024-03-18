export default function Stat({ item }) {
  if (!item.length)
    return (
      <p className="stats">
        <em>Starting adding some items to your packing list📦</em>
      </p>
    );

  const numItems = item.length;
  const numPacked = item.filter((item) => item.packed).length;
  const percentage = Math.round((numPacked / numItems) * 100);

  return (
    <footer className="stats">
      <em>
        {percentage === 100
          ? "You got everything ready to go!✈️"
          : `🧺 You have ${numItems} item on your list, you have already packed ${numPacked} (${percentage}%)`}
      </em>
    </footer>
  );
}
