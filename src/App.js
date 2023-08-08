import { useState } from "react";
import InputBasic from "./components/InputBasic";
import SelectBasic from "./components/SelectBasic";

const App = () => {
  const [input, setInput] = useState();
  const [errorMessage, setErrorMessage] = useState();
  const changeHandler = (e) => {
    // console.log(e);

    //for react-select
    if (e)
      setInput({
        value: e.value,
        label: e.label,
      });
    else
      setInput({
        value: "",
        label: "",
      });
console.log(e)
    //for input basic
    // setInput(e.target.value);
  };
  const blurHandler = (e) => {
    //console.log(input);
    //for select
    if (input.value==='') setErrorMessage("input Should not be empty");
    else setErrorMessage("");

     console.log(errorMessage)

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

    </>
  );
};

export default App;
