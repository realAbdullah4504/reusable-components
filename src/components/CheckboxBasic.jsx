// ** Reactstrap Imports
import { Label, Input } from "reactstrap";

const CheckboxBasic = ({ name = 'checkbox', id = 'ex1-active', disabled = false, type = "checkbox", value = false, changeHandler }) => {
    return (
        <div className="demo-inline-spacing">
            <div className="form-check form-check-inline">
                <Input
                    type={type}
                    disabled={disabled}
                    value={value}
                    onClick={changeHandler}
                    name={name}
                    id={id} />
                <Label className="form-check-label">Checked Disabled</Label>
            </div>
        </div>
    );
};
export default CheckboxBasic;
