const Total = ({ t }) => {
  console.log(t);
  const tot = t.map((i) => i.exercises).reduce((i, j) => i + j, 0);
  return (
    <div>
      <p>Number of exercises {tot}</p>
    </div>
  );
};

export default Total;
