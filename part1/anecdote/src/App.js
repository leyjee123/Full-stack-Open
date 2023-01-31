import { useState } from "react";
import Button from "./Components/Button";
import Display from "./Components/Display";
import TopAnecdote from "./Components/TopAnecdote";

const App = () => {
  const anecdotes = [
    "If it hurts, do it more often.",
    "Adding manpower to a late software project makes it later!",
    "The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    "Premature optimization is the root of all evil.",
    "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
    "Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.",
    "The only way to go fast, is to go well.",
  ];

  const [selected, setSelected] = useState(0);
  const [votes, setVote] = useState(Array(anecdotes.length).fill(0));
  const randIndex = Math.floor(Math.random() * anecdotes.length);
  const points = [...votes];
  

  const topOne = points.every(item => item === 0) ? "none" : points.indexOf(Math.max(...points));

  const ClickHandler = () => {
    console.log("next-- ", anecdotes[selected]);
    //console.log(selected);
    setSelected(randIndex);
  };
  const vote = () => {
    points[selected] += 1;
    console.log("current points",points);
    setVote(points);
  };

  return (
    <div>
      <h1>Anecdote of the Day</h1>
      <Display anec={anecdotes[selected]} p={points[selected]} />
      <Button n={ClickHandler} v={vote} />
      
      <h1>Anecdote with Most Votes</h1>
      <TopAnecdote top={anecdotes[topOne]} p={points[topOne]}  />
    </div>
  );
};

export default App;
