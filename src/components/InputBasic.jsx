import { Form, Input, Label, FormFeedback, FormGroup } from "reactstrap";


const InputBasic = ({
    className = 'form-control',
    type = 'text',
    name = '',
    id = 'basicInput',
    disabled = false,
    value = '',
    label = '',
    changeHandler,
    blurHandler,
    errorMessage = '',
    required = false,
    placeholder = 'Enter Name',
}) => {

    return (
        <div>
            <Label className='form-label' for={id}>
                {label}
            </Label>
            <h1>{value}</h1>
            <Input
                className={className}
                type={type}
                name={name}
                id={id}
                disabled={disabled}
                value={value}
                onChange={changeHandler}
                onBlur={blurHandler}
                required={required}
                placeholder={placeholder}
                invalid={errorMessage ? true : false}
            />
            <FormFeedback>
                {errorMessage}
            </FormFeedback>
        </div>
    )
}
export default InputBasic;