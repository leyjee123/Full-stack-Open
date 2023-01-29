import Part from "./Part";

const Content = (props) => {
  console.log(props);
  const names = Object.values(props.n).map(i=>i.name)
  const counts = Object.values(props.n).map(i=>i.exercises)


  console.log("content names : " + names);
  console.log("counts: " + counts);

  return (
    <div>
      <Part part={names[0]} count={counts[0]} />
      <Part part={names[1]} count={counts[1]} />
      <Part part={names[2]} count={counts[2]} />
    </div>
  );
};

export default Content;
