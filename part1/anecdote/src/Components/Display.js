export default function Display({ anec,p }) {
  console.log(anec);
  return (
    <div>
      <p>{anec}</p>
      <p>has {p} votes</p>
    </div>
  );
}
