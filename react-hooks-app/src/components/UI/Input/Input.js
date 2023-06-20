export default function Input (props) {
    const { inputType, inputId, inputState, inputChangeHandler, inputValidatorHandler } = props;
    return (
        <input
            type={inputType}
            id={inputId}
            value={inputState && inputState.value}
            onChange={inputChangeHandler}
            onBlur={inputValidatorHandler}
        />
    )
}