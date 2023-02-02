import Course from "./Course";

export default function Project({ cour }) {
  const p = cour.map((x) => <Course key={x.id} course={x} part={x.parts} />);
  return <div>{p}</div>;
}
