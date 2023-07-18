import { useState } from "react";

const Button = ({ label, handleClick }) => (
  <button onClick={handleClick}>{label}</button>
);

const Statistic = ({ text, value }) => (
  <tr>
    <th style={{ textAlign: "left", fontWeight: "normal" }}>{text}</th>
    <td>{value}</td>
  </tr>
);

const Statistics = (props) => {
  const all = props.good + props.neutral + props.bad;

  if (!all) {
    return <p>No feedback given</p>;
  }

  const average = (props.good + props.bad * -1) / all;
  const positive = (props.good / all) * 100;

  return (
    <table>
      <tbody>
        <Statistic text="good" value={props.good} />
        <Statistic text="neutral" value={props.neutral} />
        <Statistic text="bad" value={props.bad} />
        <Statistic text="all" value={all} />
        <Statistic text="average" value={average.toFixed(2)} />
        <Statistic text="positive" value={positive.toFixed(2) + " %"} />
      </tbody>
    </table>
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
