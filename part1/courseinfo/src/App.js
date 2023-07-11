const Header = ({ courseName }) => {
  return <h1>{courseName}</h1>;
};

const Content = ({ part1, part2, part3 }) => {
  return (
    <>
      <Part {...part1} />
      <Part {...part2} />
      <Part {...part3} />
    </>
  );
};

const Part = ({ name, exercises }) => {
  return (
    <p>
      {name} {exercises}
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
  const part1 = {
    name: "Fundamentals of React",
    exercises: 10,
  };
  const part2 = {
    name: "Using props to pass data",
    exercises: 7,
  };
  const part3 = {
    name: "State of a component",
    exercises: 14,
  };

  return (
    <div>
      <Header courseName={course} />
      <Content part1={part1} part2={part2} part3={part3} />
      <Total
        exercisesCount1={part1.exercises}
        exercisesCount2={part2.exercises}
        exercisesCount3={part3.exercises}
      />
    </div>
  );
};

export default App;
