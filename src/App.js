import { useState } from "react";
import TextArea from "./components/TextArea";
import InputBasic from "./components/InputBasic";
import SelectBasic from "./components/SelectBasic";
import SwitchBasic from "./components/SwitchBasic";
import ButtonBasic from "./components/ButtonBasic";

const App = () => {
  const [input, setInput] = useState();
  const [errorMessage, setErrorMessage] = useState();


  const clickHandler=()=>{
    alert('iam clicked');
  }

  const changeHandler = (e) => {
    //console.log(e.target.value);
    //for switch basic and text area
    //setInput(e.target.value);
    //for react-select
    // if (e)
    //   setInput({
    //     value: e.value,
    //     label: e.label,
    //   });
    // else
    //   setInput({
    //     value: "",
    //     label: "",
    //   });
    // console.log(e);
    //for input basic
    // setInput(e.target.value);
  };
  const blurHandler = (e) => {
    //console.log(input);
    //for select
    // if (input.value==='') setErrorMessage("input Should not be empty");
    // else setErrorMessage("");
    // console.log(errorMessage);
    // for input basic
    // const { value } = e.target;
    // if (value === "") setErrorMessage("input Should not be empty");
    // else setErrorMessage("");
  };

  const colourOptions = [
    { value: "ocean", label: "Ocean" },
    { value: "blue", label: "Blue" },
    { value: "purple", label: "Purple" },
    { value: "red", label: "Red" },
    { value: "orange", label: "Orange" },
  ];

  return (
    <>
      <InputBasic
        changeHandler={changeHandler}
        errorMessage={errorMessage}
        blurHandler={blurHandler}
        value={input}
      />
      <SelectBasic
        colourOptions={colourOptions}
        changeHandler={changeHandler}
        blurHandler={blurHandler}
        errorMessage={errorMessage}
        value={input}
      />
      <SwitchBasic changeHandler={changeHandler} value={input} />
      <TextArea changeHandler={changeHandler} value={input} />
      <ButtonBasic clickHandler={clickHandler}/>
    </>
  );
};

export default App;
