import { Button, Modal, ModalHeader } from "reactstrap";
import ModalFooterBasic from "./ModalFooterBasic";
import CommonModal from './CommonModal';


const ModalMain = ({
    changeHandler,
    errorMessage,
    blurHandler,
    value,
    formSetting,
    isLoading,
    clickHandlerSubmit,
    clickHandlerCancel,
    formModal,
    buttonDisabled,
}) => {

    return (
        <div className="demo-inline-spacing">
            {/* <Toaster position="top-right" /> */}

            <Button color="primary" outline onClick={clickHandlerCancel}>
                Login Form
            </Button>

            <Modal
                isOpen={formModal}
                toggle={clickHandlerCancel}
                className="modal-dialog-centered"
            >
                <ModalHeader toggle={clickHandlerCancel}>
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
                    disabled={buttonDisabled}
                    clickHandlerCancel={clickHandlerCancel}
                    clickHandlerSubmit={clickHandlerSubmit}
                    isLoading={isLoading}
                />
            </Modal>

        </div>
    )

}

export default ModalMain;