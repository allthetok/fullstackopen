import React from 'react';
const Header = ({course}) => {
    return (
      <div>
        <h1>{course.name}</h1>
      </div>
    )
  };
  
  const Part = ({part, exercises}) => {
    return (
      <div>
        <p> {part} {exercises}</p>
      </div>
    )
  }
  
  const Content = ({parts}) => {
    console.log(parts);
    const total = parts.reduce((sum, part) => {
        return sum + part.exercises;
    }, 0);
    
    return (
      <div>
          {parts.map(part => <Part part={part.name} exercises={part.exercises} key={part.id}/>)}
          <strong>total of {total} exercises </strong>
      </div>
    )
  };

const Course = ({course}) => {
    return (
        <div>
            <Header course={course} />
            <Content parts={course.parts} />
        </div>
    )
}

export default Course;