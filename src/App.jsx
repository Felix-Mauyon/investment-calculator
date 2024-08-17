import Header from "./components/Header"
import InputField from "./components/InputField"
import Result from "./components/Result"
import { useState } from "react"



function App() {

  const [userInput, setUserInput] = useState({
    initialInvestment : 15000,
    annualInvestment : 1200,
    expectedReturn : 6,
    duration : 10
  })

  const inputIsValid = userInput.duration >=1

  function handleChange(inputIdentifier, value){
  setUserInput((prevUserInput)=>{
    return {...prevUserInput, [inputIdentifier] : +value}
  })

}


  return (
    <>
      <Header />
      <InputField userInput={userInput} onchange={handleChange}/>
      {inputIsValid ? <Result userInput={userInput}/> : <p className="center">Duration must be greater than 0</p>}

    </>
  )
}

export default App
