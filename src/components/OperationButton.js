import { ACTIONS } from "../App"

export default function OperationButton({dispatch,operation}) {
    return (
        <button onClick={ () => {
            dispatch({type:ACTIONS.CHOOSE_OPERATION,payload:{operation}}) // CHOOSE_OPERATION case of Reducer is applied to choose the Operand for evaluation.
        }}>{operation}</button>   
    )
}
