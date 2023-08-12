// ** React Imports
import { useState } from "react";

// ** Reactstrap Imports
import {
    Button,
    Modal,
    ModalHeader,
    ModalBody,
    ModalFooter,
} from "reactstrap";
import InputBasic from "./InputBasic";

const ModalForm = ({ blurHandler, changeHandler, errorMessage, value,
    formSetting }) => {
    const [formModal, setFormModal] = useState(false);

    return (
        <div className="demo-inline-spacing">
            <div>
                <Button
                    color="primary"
                    outline
                    onClick={() => setFormModal(!formModal)}
                >
                    Login Form
                </Button>


                <Modal
                    isOpen={formModal}
                    toggle={() => setFormModal(!formModal)}
                    className="modal-dialog-centered"
                >
                    <ModalHeader toggle={() => setFormModal(!formModal)}>
                        Login Form
                    </ModalHeader>

                    <ModalBody>
                        {formSetting.map(form => (
                            <div key={form?.id} className="mb-2">
                                <InputBasic
                                    changeHandler={changeHandler}
                                    errorMessage={errorMessage[form?.id]}
                                    blurHandler={blurHandler}
                                    value={value[form?.name]}
                                    name={form?.name}
                                    label={form?.label}
                                    type={form?.type}
                                    placeholder={form?.placeHolder}
                                />
                            </div>
                        ))}
                    </ModalBody>
                    <ModalFooter>
                        <Button color="primary" onClick={() => setFormModal(!formModal)}>
                            Login
                        </Button>{" "}
                    </ModalFooter>
                </Modal>
            </div>
        </div>
    );
};
export default ModalForm;
