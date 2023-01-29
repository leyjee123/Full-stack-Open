export default function Statistics({ g, n, b }) {
  const total = g + b + n;
  const ave = (g - b) / total;
  const pos = (100 * g) / total;
  return (
    total ?
    <div>
      <p>Good: {g}</p>
      <p>Neutral: {n}</p>
      <p>Bad: {b}</p>
      <p>All: {total}</p>
      <p>Average: {ave}</p>
      <p>Positive: {pos} %</p>
    </div>:
    <h3>No Feedback Given</h3>
  );
}
