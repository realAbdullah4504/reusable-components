import { useState } from "react";
import TextArea from "./components/TextArea";
import InputBasic from "./components/InputBasic";
import SelectBasic from "./components/SelectBasic";
import SwitchBasic from "./components/SwitchBasic";
import ButtonBasic from "./components/ButtonBasic";
import ProgressBasic from "./components/Loading";
import CheckboxBasic from "./components/CheckboxBasic";
import RadioButton from "./components/RadioButton";
import CommonModal from "./components/CommonModal";
import Notify from "./components/Notify";
import TooltipBasic from "./components/TooltipBasic";

const initialState = {
  name: "",
  city: {},
  switch: false,
};
const App = () => {
  const [state, setState] = useState(initialState);
  const [errorMessage, setErrorMessage] = useState();

  const clickHandler = () => {
    alert("iam clicked");
  };

  const changeHandler = (name) => (e) => {
    const value = name==='switch' ?  e?.target?.checked : (e?.target?.value || e);
    setState({ ...state, [name]: value });
    console.log(name, state);
  };
  const blurHandler = (e) => {
    //console.log(input);
    //for select
    // if (input.value==='') setErrorMessage("input Should not be empty");
    // else setErrorMessage("");
    // console.log(errorMessage);
    // for input basic
    const { value } = e.target;
    if (value === "") setErrorMessage("input Should not be empty");
    else setErrorMessage("");
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
        value={state?.name}
        name="name"
      />
      <SelectBasic
        colourOptions={colourOptions}
        changeHandler={changeHandler}
        blurHandler={blurHandler}
        errorMessage={errorMessage}
        value={state?.city}
        name="city"
      />
      <SwitchBasic
        changeHandler={changeHandler}
        // value={state.switch}
        name="switch"
      />
      {/* <TextArea changeHandler={changeHandler} value={input} />
      <ButtonBasic clickHandler={clickHandler} />
      <ProgressBasic />
      <CheckboxBasic changeHandler={changeHandler} value={input} />
      <RadioButton /> */}

      {/* <CommonModal
        changeHandler={changeHandler}
        errorMessage={errorMessage}
        blurHandler={blurHandler}
        value={input}
      /> */}
      <Notify />
      <TooltipBasic>this is tooltip</TooltipBasic>
    </>
  );
};

export default App;
