import React, {useState} from 'react';

// const Hello = ({name, age}) => {

//   const bornYear = () => new Date().getFullYear() - age;

//   return (
//     <div>
//       <p>Hello {name}, you are {age} years old</p>
//       <p> So you were probably born in {bornYear()}</p>
//     </div>
//   )
// }

// const App = () => {
//   // const name = "Allen";
//   // const age = 21;

//   // return (
//   //   <div>
//   //     <h1> Greetings</h1>
//   //     <Hello name="Aisha" age={age + 3} />
//   //     <Hello name={name} age={age} />
//   //   </div>
//   // )
// }

  // const App = () => {
  //   const [counter, setCounter] = useState(0);
    
  //  const increaseByOne = () => setCounter(counter + 1);

  //  const decreaseByOne = () => setCounter(counter - 1);

  //  const setToZero = () => setCounter(0);

  //  const Display = ({ counter }) => <div>{counter}</div>;

  //  const Button = ({handleClick, text}) =>  (
  //   <button onClick={handleClick}> 
  //     {text} 
  //   </button>
  //  );
    


  //   return (
  //     <div>
  //       <Display counter={counter} />
  //       <Button handleClick={increaseByOne} text="+" />
  //       <Button handleClick={setToZero} text="reset" />
  //       <Button handleClick={decreaseByOne} text="-" />
  //     </div>
  //   )
  // }

  // const History = (props) => {
  //   if (props.allClicks.length === 0) {
  //     return (
  //       <div>
  //         the app is used by pressing the buttons
  //       </div>
  //     )
  //   }
  //   return (
  //     <div>
  //       Button press history: {props.allClicks.join(' ')}
  //     </div>
  //   )
  // }

  // const Button = ({handleClick, text}) => (
  //   <button onClick={handleClick}>
  //     {text}
  //   </button>
  // )

  // const App = () => {
  //   const [left, setLeft ] = useState(0);
  //   const [right, setRight] = useState(0);
  //   const [allClicks, setAll] = useState([]);

  //   const handleLeftClick = () => {
  //     setAll(allClicks.concat('L'));
  //     setLeft(left+1);
  //   }

  //   const handleRightClick = () => {
  //     setAll(allClicks.concat('R'));
  //     setRight(right+1);
  //   }

  //   return (
  //     <div>
  //       {left}
  //       <Button handleClick={handleLeftClick} text="left" />
  //       <Button handleClick={handleRightClick} text="right" />
  //       {right}
  //       <History allClicks={allClicks} />
  //     </div>
  //   )
  // }
  const Display = props => <div>{props.value}</div>

  const Button = (props) => (
    <button onClick={props.handleClick}>
      {props.text}
    </button>
  )

  const App = () => {
    const [value, setValue ] = useState(10);

    // const handleClick = () => {
    //   setValue(0);
    //   console.log('clicked the button')
    // }

    // const hello = (who) => () => {
    //     console.log('hello', who);
    // }

    const setToValue = (newValue) => {
      setValue(newValue)
    }

    return (
      <div>
        <Display value={value} />
        <Button handleClick={() => setToValue(1000)} text="thousand"/>
        <Button handleClick={() => setToValue(0)} text="reset" />
        <Button handleClick={() => setToValue(value + 1)} text="increment" /> 
      </div>
    )
  }
export default App;
