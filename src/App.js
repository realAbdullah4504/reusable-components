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
import { FormData } from "./formSettings";

const initialState = {
  firstName: "",
  lastName:'',
  email:'',
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

  const clickHandler = () => {
    alert("iam clicked right");
  };

  const changeHandler = (name) => (e) => {
    //change handler for all reusable components
    const type = e?.target?.type || "";
    const value =
      type === "checkbox" || type === "radio"
        ? e?.target?.checked
        : type === ""
        ? e
        : e?.target?.value;

    setState({ ...state, [name]: value });
    console.log(state);
    //console.log(e);
  };
  const blurHandler = (e) => {
    const { value, name } = e.target;
    // console.log(e.target.type);

    const obj = FormData?.form?.find((data) => data.name === name);
    //console.log(obj);

    const test = !obj?.regex?.test(value);

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
    {/* <InputBasic
        changeHandler={changeHandler}
        errorMessage={errorMessage[FormData?.form[0]?.id]}
        blurHandler={blurHandler}
        value={state[FormData?.form[0]?.name]}
        name={FormData?.form[0]?.name}
        label={FormData?.form[0]?.label}
        type={FormData?.form[0]?.type}
        placeholder={FormData?.form[0]?.placeHolder}
      /> */}
      {/* <InputBasic
        changeHandler={changeHandler}
        errorMessage={errorMessage[FormData?.form[1]?.id]}
        blurHandler={blurHandler}
        value={state?.lastName}
        name={FormData?.form[1]?.name}
        label={FormData?.form[1]?.label}
        type={FormData?.form[1]?.type}
        placeholder={FormData?.form[1]?.placeHolder}
      />
      <InputBasic
        changeHandler={changeHandler}
        errorMessage={errorMessage[FormData?.form[2]?.id]}
        blurHandler={blurHandler}
        value={state?.email}
        name={FormData?.form[2]?.name}
        label={FormData?.form[2]?.label}
        type={FormData?.form[2]?.type}
        placeholder={FormData?.form[2]?.placeHolder}
      />

      <InputBasic
        changeHandler={changeHandler}
        errorMessage={errorMessage[FormData?.form[3]?.id]}
        blurHandler={blurHandler}
        value={state?.password}
        name={FormData?.form[3]?.name}
        label={FormData?.form[3]?.label}
        type={FormData?.form[3]?.type}
        placeholder={FormData?.form[3]?.placeHolder}
      /> */}
      

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
        value={state.switch}
        name="switch"
      />

      <TextArea
        changeHandler={changeHandler}
        value={state.textBox}
        name="textBox"
      />

      <ButtonBasic clickHandler={clickHandler} />

      <ProgressBasic />

      <CheckboxBasic
        changeHandler={changeHandler}
        name="checkBox"
        value={state.checkBox}
      />

      <RadioButton
        changeHandler={changeHandler}
        name="radio"
        checked={state.radio}
      />

      <CommonModal
        changeHandler={changeHandler}
        errorMessage={errorMessage}
        blurHandler={blurHandler}
        value={state}
        formSetting={FormData.form}
      />
      <Notify type="error" message="this is error" />
      <TooltipBasic>this is tooltip</TooltipBasic>
    </>
  );
};

export default App;
