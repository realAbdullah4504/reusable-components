// ** React Imports
import { useState } from "react";

// ** Reactstrap Imports
import {
    Button,
    Modal,
    ModalHeader,
    ModalBody,
    ModalFooter
} from "reactstrap";
import ModalFooterBasic from "./ModalFooterBasic";
import InputBasic from "./InputBasic";



const ModalForm = ({ blurHandler, changeHandler, errorMessage, value,
    formSetting }) => {
    // const [formModal, setFormModal] = useState(false);

    return (
        <div>
            <ModalBody>
                {formSetting.map(form => (
                    <div key={form?.id} className="mb-2">
                        <InputBasic
                            changeHandler={changeHandler}
                            id={form?.id}
                            errorMessage={errorMessage[form?.id]}
                            blurHandler={blurHandler}
                            value={value[form?.name]}
                            name={form?.name}
                            label={form?.label}
                            type={form?.type}
                            // disabled={!form?.isUpdate}
                            placeholder={form?.placeHolder}
                        />
                    </div>
                ))}

                {/* <SelectBasic
                    colourOptions={colourOptions}
                    changeHandler={changeHandler}
                    blurHandler={blurHandler}
                    errorMessage={errorMessage[5]}
                    value={state?.city}
                    name="city"
                /> */}


            </ModalBody>
        </div>
    );
};
export default ModalForm;
