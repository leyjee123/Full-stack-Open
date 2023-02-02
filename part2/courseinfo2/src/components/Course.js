export default function Course({ course, part }) {
  const res = part.map((x) => (
    <p key={x.id}>
      {x.name} {x.exercises}
    </p>
  ));
  const total = part.reduce((x,y) => x+ y.exercises, 0);
  console.log("this is ",part);
  return (
    <div>
      <h1>{course.name}</h1>
      {res}
      <h2>Total of {total} exercises</h2>
    </div>
  );
}
