const Header = ({ courseName }) => {
  return <h1>{courseName}</h1>;
};

const Content = ({
  partName1,
  partName2,
  partName3,
  exercisesCount1,
  exercisesCount2,
  exercisesCount3,
}) => {
  return (
    <>
      <Part partName={partName1} exercisesCount={exercisesCount1} />
      <Part partName={partName2} exercisesCount={exercisesCount2} />
      <Part partName={partName3} exercisesCount={exercisesCount3} />
    </>
  );
};

const Part = ({ partName, exercisesCount }) => {
  return (
    <p>
      {partName} {exercisesCount}
    </p>
  );
};

const Total = ({ exercisesCount1, exercisesCount2, exercisesCount3 }) => {
  return (
    <p>
      Number of exercises {exercisesCount1 + exercisesCount2 + exercisesCount3}
    </p>
  );
};

const App = () => {
  const course = "Half Stack application development";
  const part1 = "Fundamentals of React";
  const exercises1 = 10;
  const part2 = "Using props to pass data";
  const exercises2 = 7;
  const part3 = "State of a component";
  const exercises3 = 14;

  return (
    <div>
      <Header courseName={course} />
      <Content
        partName1={part1}
        exercisesCount1={exercises1}
        partName2={part2}
        exercisesCount2={exercises2}
        partName3={part3}
        exercisesCount3={exercises3}
      />
      <Total
        exercisesCount1={exercises1}
        exercisesCount2={exercises2}
        exercisesCount3={exercises3}
      />
    </div>
  );
};

export default App;
