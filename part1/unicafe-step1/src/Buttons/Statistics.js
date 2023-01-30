import StatisticsLine from "./StatisticsLine";

export default function Statistics({ g, n, b }) {
  const t = g + b + n;
  const tbValues = {
    Good: g,
    Neutral: n,
    Bad: b,
    Total: t,
    Average: (g - b) / t,
    Positive: (100 * g) / t,
  };

  const mapped = Object.entries(tbValues).map((n) => (
    <StatisticsLine key={n[0]} text={n[0]} val={n[1]} />
  ));
  return tbValues.Total ? (
    <table>
      <tbody>{mapped}</tbody>
    </table>
  ) : (
    <h3>No Feedback Given</h3>
  );
}
