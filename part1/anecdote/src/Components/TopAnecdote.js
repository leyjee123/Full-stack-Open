export default function TopAnecdote({ top, p }) {
  const text = p ?"has "+ p + " votes" : "none";
  return (
    <div>
      <p>{top}</p>
      <p>{text}</p>
    </div>
  );
}
