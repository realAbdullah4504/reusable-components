import { useEffect, useState } from "react";
import { Button, Modal, ModalHeader } from "reactstrap";
import ModalFooterBasic from "./ModalFooterBasic";
import CommonModal from './CommonModal';
import Notify from "./Notify";
import { Toaster, toast } from 'react-hot-toast';
import { validation } from "../utils/helpers/validation";


const ModalMain = ({
    changeHandler,
    errorMessage,
    blurHandler,
    value,
    formSetting,
}) => {

    const [formModal, setFormModal] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [notify, setNotify] = useState({})
    // const [showNotify, setShowNotify] = (false)

    // console.log('errormessage', errorMessage);

    const handleToast = (type, message) => {
        toast[type](message);
    };

    // const areAllFieldsNotEmpty = (value, errorMessage) => {
    //     for (const key in value) {
    //         if (value.hasOwnProperty(key) && value[key].trim() === '')
    //             return false;
    //     }
    //     for (const key in errorMessage) {
    //         if (errorMessage.hasOwnProperty(key) && errorMessage[key].trim() !== '')
    //             return false;
    //     }

    //     return true;
    // }
    //console.log(areAllFieldsNotEmpty());


    const simulateAsyncOperation = () => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                const randomValue = Math.random();
                if (randomValue < 0.7) {
                    resolve('Success! This is a success message.'); // Simulate a successful async operation
                } else {
                    reject('Error! This is a error message.'); // Simulate an error in async operation
                }
            }, 2000);
        });
    };
    const clickHandlerSubmit = async () => {
        // alert("iam clicked right");
        setIsLoading(true)
        try {
            const message = await simulateAsyncOperation();
            setIsLoading(false);
            // showNotify(true);
            //  setNotify({ type: 'success', message: 'Success! This is a success message.' })
            handleToast('success', message)
            clickHandlerCancel(formModal, setFormModal);

        } catch (error) {
            // console.error(error)
            setIsLoading(false);
            // showNotify(true)
            //  setNotify({ type: 'error', message: 'Error! This is a error message.' })
            handleToast('error', error);
        }
    };
    const clickHandlerCancel = (formModal, setFormModal) => {
        setFormModal(!formModal)
    }

    return (
        <div className="demo-inline-spacing">
            {/* <Toaster position="top-right" /> */}

            <Button color="primary" outline onClick={() => clickHandlerCancel(formModal, setFormModal)}>
                Login Form
            </Button>

            <Modal
                isOpen={formModal}
                toggle={() => clickHandlerCancel(formModal, setFormModal)}
                className="modal-dialog-centered"
            >
                <ModalHeader toggle={() => clickHandlerCancel(formModal, setFormModal)}>
                    Login Form
                </ModalHeader>

                <CommonModal
                    changeHandler={changeHandler}
                    errorMessage={errorMessage}
                    blurHandler={blurHandler}
                    value={value}
                    formSetting={formSetting}
                />

                <ModalFooterBasic
                    disabled={!validation(value, errorMessage,formSetting)}
                    clickHandlerCancel={() => clickHandlerCancel(formModal, setFormModal)}
                    clickHandlerSubmit={clickHandlerSubmit}
                    isLoading={isLoading}
                />
            </Modal>

        </div>
    )

}

export default ModalMain;