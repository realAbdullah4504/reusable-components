import { useState } from "react";
import TextArea from "./components/TextArea";
// import InputBasic from "./components/InputBasic";
import SelectBasic from "./components/SelectBasic";
import SwitchBasic from "./components/SwitchBasic";
import ButtonBasic from "./components/ButtonBasic";
import ProgressBasic from "./components/Loading";
import CheckboxBasic from "./components/CheckboxBasic";
import RadioButton from "./components/RadioButton";
import Notify from "./components/Notify";
import TooltipBasic from "./components/TooltipBasic";
import { Toaster } from "react-hot-toast";
import { FormData } from "./formSettings";

import ModalMain from "./components/ModalMain";

const initialState = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  city: {},
  switch: false,
  textBox: "",
  radio: false,
  checkBox: false,
};

// const form = {
//   'first': {
//     id: "1",
//     type: "text",
//   },
//   'second': {
//     id: "2",
//     type: "text",
//   },
// };

const App = () => {
  //console.log(form);

  const [state, setState] = useState(initialState);
  const [errorMessage, setErrorMessage] = useState([]);

  const changeHandler = (name) => (e) => {
    //change handler for all reusable components
    const type = e?.target?.type || "";
    console.log(e);
    const value =
      type === "checkbox" || type === "radio"
        ? e?.target?.checked
        : type === ""
        ? e
        : e?.target?.value;

    setState({ ...state, [name]: value });
    // console.log(state);
    //console.log(e);
  };
  const blurHandler = (e) => {
    const { value, name } = e.target;
    // console.log(e.target.type);

    const obj = FormData?.form?.find((data) => data.name === name);
    //console.log(obj);

    const test = !obj?.regex?.test(value);

    if (obj?.required) {
      if (value === "" || test) {
        const updatedErrors = {
          ...errorMessage,
          [obj?.id]: obj?.errorMessage,
        };
        console.log(updatedErrors);
        setErrorMessage(updatedErrors);
      } else {
        setErrorMessage({
          ...errorMessage,
          [obj?.id]: "",
        });
      }
    } else {
      setErrorMessage({
        ...errorMessage,
        [obj?.id]: "",
      });
    }
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
      <Toaster position="top-right" />
      <ModalMain
        changeHandler={changeHandler}
        errorMessage={errorMessage}
        blurHandler={blurHandler}
        value={state}
        formSetting={FormData.form}
      />
      {/* <SelectBasic
        colourOptions={colourOptions}
        changeHandler={changeHandler}
        blurHandler={blurHandler}
        errorMessage={errorMessage}
        value={state?.city}
        name="city"
      /> */}
      {/* <SwitchBasic
        changeHandler={changeHandler}
        value={state.switch}
        name="switch"
      /> */}
      {/* <TextArea
        changeHandler={changeHandler}
        value={state.textBox}
        name="textBox"
      /> */}
      {/* <ButtonBasic clickHandler={clickHandler} /> */}
      {/* <ProgressBasic /> */}
      <CheckboxBasic
        changeHandler={changeHandler}
        name="checkBox"
        value={state.checkBox}
      />
      {/* <RadioButton
        changeHandler={changeHandler}
        name="radio"
        checked={state.radio}
      /> */}
      {/* <Notify type="success" message="this is error" /> */}
      <TooltipBasic>this is tooltip</TooltipBasic>
    </>
  );
};

export default App;
