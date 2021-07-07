import React, {useState} from "react";

//Exercise 1.6-1.11
// const Display = ({text}) => {
//   return ( 
//     <div>
//       <h1> {text} </h1>
//     </div>
//     )};

// const Statistic = (props) => {
//   return (
//     <div>
//       <p>{props.text} {props.value} {props.optional}</p> 
//     </div>
//   )
// }

// const Statistics = (props) => {

//   if (props.good === 0 && props.neutral === 0 && props.bad === 0) {
//     return (
//     <div>
//       <p>No feedback given</p>
//     </div>
//     );
//   }
//   return (
//     <div>
//       <Statistic text="good" value={props.good} optional=""/>
//       <Statistic text="neutral" value={props.neutral} optional=""/>
//       <Statistic text="bad" value={props.bad} optional=""/>
//       <Statistic text="all" value={props.good + props.neutral + props.bad} optional=""/>
//       <Statistic text="average" value={(props.good - props.bad) / (props.good + props.neutral + props.bad)} optional=""/>
//       <Statistic text="positive" value={(props.good / (props.good + props.neutral + props.bad)) * 100 } optional="%"/>
//     </div>
//   );
  
// }

// const Button = ({text, handleClick}) => {
//   return (
//     <button onClick={handleClick}>{text}</button>
//   )
// }

// const App = () => {
//   //save clicks of each button to its own state
//   const [good, setGood] = useState(0);
//   const [neutral, setNeutral] = useState(0);
//   const [bad, setBad] = useState(0);

//   const handleGood = () => {
//     setGood(good+1)
//   }

//   const handleNeutral = () => {
//     setNeutral(neutral+1)
//   }

//   const handleBad = () => {
//     setBad(bad+1)
//   }
  
//   return (
//     <div>
//       <Display text="give feedback" />
//       <Button handleClick={handleGood}text="good" />
//       <Button handleClick={handleNeutral} text="neutral"/>
//       <Button handleClick={handleBad} text="bad" />
//       <Display text="statistics" />
//       <Statistics good={good} neutral={neutral} bad={bad}/>
//     </div>
//   )
// }

//Exercise 1.12-1.14
const Button = ({text, handleClick}) => {
    return (
      <button onClick={handleClick}>{text}</button>
    )
  }
  const Display = ({text}) => {
      return ( 
        <div>
          <h1> {text} </h1>
        </div>
        )};

  

const App = () => {                                                   
  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blod tests when dianosing patients'
  ];

  const [selected, setSelected] = useState(0);
  const [votes, setVotes] = useState([0, 0, 0, 0, 0, 0, 0]);
 
  const handleRandomClick = () => {
    const randomVal = Math.round(Math.random()*anecdotes.length);
    setSelected(randomVal);
  }

  const handleVote = () => {
    const copy = [...votes];
    copy[selected]++;
    setVotes(copy);
  }

  return (
    <div>
      <Display text="Anecdote of the day" />
      {anecdotes[selected]} <br></br>
      has {votes[selected]} votes
      <Button text="vote" handleClick={handleVote} />
      <Button text="next anecdote" handleClick={handleRandomClick} />
      <Display text="Anecdote with the most votes" />
      {anecdotes[votes.indexOf(Math.max(...votes))]}
    </div>
  )
}

export default App;
