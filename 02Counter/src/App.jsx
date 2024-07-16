import './App.css'
import { useState } from 'react'

function App() {
  let [counter, setCounter] = useState(0)
  //The first value, counter, is our current state.
  //The second value, setCounter, is the function that is used to update our state.
  function addValue(){
    if(counter<20){
      counter = counter+1;
    setCounter(counter)
    console.log(`Add button clicked ${counter}`);
    }
    
  }
  function subValue(){
    if(counter>0){
      counter = counter-1;
    setCounter(counter)
    console.log(`ASub button clicked ${counter}`);
    }
    
  }
  function removeValue(){
    counter=0;
    setCounter(counter)
    console.log(`Remove button clicked ${counter}`);
    
  }
  return (
    <>
      <h1>Chai Aur React</h1>
      <h2>Counter value : {counter}</h2>
      <button
        onClick={addValue}
      >Increase</button>
      <button
        onClick={subValue}
      >Decrease</button>
      <button
        onClick={removeValue}
      >Reset</button>
      <br/>
      <h6>Note: Range of Counter is 0 - 20</h6>
    </>
  )
}

export default App
