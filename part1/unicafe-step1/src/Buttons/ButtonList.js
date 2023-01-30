
export default function ButtonList({ g, n, b }) {
  return (
    <div>
        <button onClick={g}>Good</button>
        <button onClick={n}>Neutral</button>
        <button onClick={b}>Bad</button>
    </div>
  );
}
