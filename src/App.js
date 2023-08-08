import { useState } from "react";
import InputBasic from "./components/InputBasic";

const App = () => {
  const [input,setInput]=useState();
  const [errorMessage,setErrorMessage]=useState();
  const changeHandler=(e)=>{
    setInput(e.target.value)
  }
  const blurHandler=(e)=>{
    // console.log(e.target.value);
    const {value}=e.target;
    if(value==='')
    setErrorMessage('input Should not be empty')
  }



  return (
    <>
      <InputBasic changeHandler={changeHandler} errorMessage={errorMessage} blurHandler={blurHandler} value={input}/>
    </>
  );
};

export default App;
