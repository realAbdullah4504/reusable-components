// ** Reactstrap Imports
import { Input, Label } from 'reactstrap'

const SwitchBasic = ({
  type = 'switch',
  name = 'customSwitch',
  value = false,
  id = 'exampleCustomSwitch',
  disabled = false,
  changeHandler,
}) => {
  return (

    <div>
      <div className='form-check form-switch'>
        <Input
          type={type}
          name={name}
          value={value}
          id={id}
          disabled={disabled}
          onChange={changeHandler}
        />
        <Label for={id} className='form-check-label'>
          Toggle this switch element
        </Label>
      </div>
    </div>

  )
}
export default SwitchBasic
