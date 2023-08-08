import React from 'react';
import { Button } from 'reactstrap';
import { Toaster, toast } from 'react-hot-toast';
import ButtonBasic from './ButtonBasic';

const Notify = ({
    message='Success! This is a success message.',
    type='success'
}) => {
    const handleSuccessToast = () => {
        toast.success(message);
    };

    const handleErrorToast = () => {
        toast.error(message);
    };

    return (
        <div>
            <Toaster position="top-right" />
            <Button onClick={type==='success' ? handleSuccessToast : handleErrorToast }>
                Show Error Toast
            </Button>
        </div>
    );
};

export default Notify;