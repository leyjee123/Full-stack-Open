export default function Button({ n, v }) {
  return (
    <div>
      <button onClick={v}>Vote</button>
      <button onClick={n}>Next Anecdote</button>
    </div>
  );
}
