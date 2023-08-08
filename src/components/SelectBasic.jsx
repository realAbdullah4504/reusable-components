import Select from 'react-select'
import { Alert  } from 'reactstrap'

const SelectBasic = ({
    className = 'react-select',
    colourOptions = '',
    id='',
    value = { value: '', label: '' },
    name = '',
    changeHandler,
    blurHandler,
    errorMessage,
    isDisabled = false,
    isLoading = false,
    isClearable = true,
}) => {
    return (
        <>
            <Select
                className={className}
                classNamePrefix='select'
                defaultValue={colourOptions[0]}
                options={colourOptions}
                isLoading={isLoading}
                name={name}
                value={value}
                onChange={changeHandler}
                onBlur={blurHandler}
                isClearable={isClearable}
                isDisabled={isDisabled}
                isinvalid={true}
            />
            {errorMessage && <span className="text-danger">Please select an option.</span>}
        </>
    )
}

export default SelectBasic

// disabled