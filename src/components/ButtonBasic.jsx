import { Button } from "reactstrap";

const ButtonBasic = ({
    text = 'text',
    color = 'primary',
    size = 'md',
    clickHandler,
    disabled=false
}) => {
    return (
        <div>
            <Button
                disabled={disabled}
                onClick={clickHandler}
                color={color}
                size={size}>
                {text}
            </Button>
        </div>
    )
}
export default ButtonBasic;
