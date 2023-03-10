import { useState } from "react";
import ButtonList from "./Components/ButtonList";
import Statistics from "./Components/Statistics";

function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleGood = () => {
    console.log("Good one");
    setGood(good + 1);
  };
  const handleBad = () => {
    console.log("bad");
    setBad(bad + 1);
  };
  const handleNeut = () => {
    console.log("ehh");
    setNeutral(neutral + 1);
  };

  return (
    <div>
      <h1>Give FeedBack</h1>
      <ButtonList g={handleGood} n={handleNeut} b={handleBad} />
      <h1>Statistics</h1>
      <Statistics g={good} n={neutral} b={bad}/>
      
    </div> 
  );
}

export default App;
