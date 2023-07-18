import { useState } from "react";

const Button = ({ label, handleClick }) => (
  <button onClick={handleClick}>{label}</button>
);

const StatisticLine = ({ text, value }) => (
  <>
    {text} {value}
    <br />
  </>
);

const Statistics = (props) => {
  const all = props.good + props.neutral + props.bad;

  if (!all) {
    return <p>No feedback given</p>;
  }

  const average = (props.good + props.bad * -1) / all;
  const positive = (props.good / all) * 100;

  return (
    <p>
      <StatisticLine text="good" value={props.good} />
      <StatisticLine text="neutral" value={props.neutral} />
      <StatisticLine text="bad" value={props.bad} />
      <StatisticLine text="all" value={all} />
      <StatisticLine text="average" value={average} />
      <StatisticLine text="positive" value={positive + " %"} />
    </p>
  );
};

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  return (
    <div>
      <h1>give feedback</h1>
      <Button label="good" handleClick={() => setGood(good + 1)} />
      <Button label="neutral" handleClick={() => setNeutral(neutral + 1)} />
      <Button label="bad" handleClick={() => setBad(bad + 1)} />

      <h1>statistics</h1>
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  );
};

export default App;
