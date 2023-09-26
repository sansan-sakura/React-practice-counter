

import { useState } from "react";
import "./index.css"


export default function App() {
  let date = new Date();
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(1);
  const [anotherDay, setAnotherDay] = useState(date);

  const incrementCount = () => {
    console.log(count);
    setCount((c) => c + step);
    console.log(count);
    setAnotherDay(addDays(count));
    console.log(anotherDay);
    return anotherDay;
  };

  const decrementCount = () => {
    console.log(count, "sub");
    setCount((c) => c - step);
    setAnotherDay(addDays(count));
    return anotherDay;
  };

  // const incrementStep = () => {
  //   setStep((s) => s + 1);
  // };

  // const decrementStep = () => {
  //   setStep((s) => s - 1);
  // };

  function addDays(days) {
    let date = new Date();
    const result = new Date(date);
    result.setDate(result.getDate() + days);
    return result;
  }

  function handleInputCount(value){
   const num= Number(value)
   const typeOfValue=typeof num
 if(typeOfValue==="number" ) setCount(num)
 console.log(value)

  }

  function handleReset(){
    setCount(0)
    setStep(1)
  }

  // function subtractDays(days) {
  //   let date = new Date();
  //   const result = new Date(date);
  //   console.log(result, count);
  //   result.setDate(result.getDate() + days);
  //   console.log(result);
  //   return result;
  // }

  // function checkdate() {
  //   const anotherDay =
  //     count > 0 ? addDays(date, count) : subtractDays(date, count);
  //   console.log(anotherDay);
  //   return <p>{anotherDay} "ji"</p>;
  // }

  return (
    <div className="App">
    
  
      <div className="step_box">
      <input type="range" min="1" max="10"value={step} onChange={(e) => {
        setStep(Number(e.target.value))}}/>
      <span>{step}</span>
        {/* <button onClick={decrementStep}>-</button>
        <p>
          Steps:<span> {step}</span> 
        </p>
        <button onClick={incrementStep}>+</button>*/}
      </div>
      <div className="count_box">
      <button onClick={decrementCount}>-</button>
       <input type="text" onChange={(e)=>handleInputCount(e.target.value)} />
        <button onClick={incrementCount}>+</button>
        {/* <button onClick={decrementCount}>-</button>
        <p>
          Count:<span> {count}</span>
        </p>
        <button onClick={incrementCount}>+</button> */}
      </div>

      <div>
        <p>
          <span>
            {count === 0
              ? "Today is"
              : count > 0
              ? `${count} days from today is`
              : `${Math.abs(count)} days ago was`}
          </span>{" "}
          day
          {count !== 0 && count !== 1 && count !== -1 && "s"} from now is{" "}
          <span>{anotherDay.toLocaleDateString()}</span>
        </p>
        {count !==0 || step!==1?   <button onClick={handleReset}>Reset</button>:null}
      
      </div>
    </div>
  );
}
