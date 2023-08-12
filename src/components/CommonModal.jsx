// ** React Imports
import { useState } from "react";

// ** Reactstrap Imports
import {
    Button,
    Modal,
    ModalHeader,
    ModalBody,
    ModalFooter,
    Label,
    Input,
} from "reactstrap";
import InputBasic from "./InputBasic";

const ModalForm = ({ blurHandler, changeHandler, errorMessage, value }) => {
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
                        <div className="mb-2">
                            <InputBasic type='text' blurHandler={blurHandler} changeHandler={changeHandler} value={value.name} disabled={true} errorMessage={errorMessage} />
                        </div>
                        <div className="mb-2">
                        <InputBasic type='password' blurHandler={blurHandler} changeHandler={changeHandler} value={value.name} errorMessage={errorMessage} label='password'/>
                        </div>
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
