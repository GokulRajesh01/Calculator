import { ACTIONS } from "../App"

export default function DigitButton({dispatch,digit}) {
    return (
        <button onClick={() => {
            dispatch({ type:ACTIONS.ADD_DIGIT,payload:{digit} })    // ADD_DIGIT case of Reducer is applied to add the digit to the state.currentOperand.
        }}>{digit}</button>
    )
}