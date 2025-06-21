import { ACTIONS } from "../App"
import evaluate from "./EvaluateFunction"

export default function reducer(state,{type,payload}){
	switch(type){
		case ACTIONS.ADD_DIGIT:

			// This part checks if an operation has already been performed before the digit is inserted.
			if(state.overwrite === true){
				return{
					...state,
					previousOperand:null,
					currentOperand:`${payload.digit}`,
					overwrite:false
				}
			}

			if(payload.digit === "0" && state.currentOperand ==="0"){
				return state
			}

			// to include decimals also into current value.
			else if(payload.digit === "." && state.currentOperand.includes(".")){
				return state
			}
			else{
				if(state.currentOperand === "0"){
					return{
						...state,
						currentOperand:`${payload.digit}`
					}
				}
				else{
					return{
						...state,
						currentOperand:`${state.currentOperand || ""}${payload.digit}`
					}
				}
			}
		case ACTIONS.CHOOSE_OPERATION:

			// does not choose operand with these 2 cases.
			if(state.currentOperand === "0" && state.previousOperand == null){
				return state
			}
			else if(state.previousOperand == null){
				return {
					...state,
					previousOperand: state.currentOperand,
					operation:payload.operation,
					currentOperand:'0'
				}
			}
			else if(state.currentOperand === '0'){
				return{
					...state,
					operation: payload.operation
				}
			}
			else{
				return {
					...state,
					previousOperand:evaluate(state),
					operation:`${payload.operation}`,
					currentOperand:'0'
				}
			}	
		case ACTIONS.CLEAR : 
			return {
				currentOperand:"0"
			}
		case ACTIONS.EVALUATE:
			if(state.currentOperand === '0' || state.operation == null || state.previousOperand == null){
				return state
			}
			return{
				...state,
				// an overwrite flag is introduced here to make sure that after an evaluation is done, introduction of a digit again before an operand makes the previous operand for a fresh new operation
				overwrite : true,
				previousOperand:null,
				currentOperand:evaluate(state),
				operation : ""
			}
		case ACTIONS.DELETE_DIGIT:
			if(state.overwrite){
				return {
					...state,
					currentOperand : '0',
					overwrite:false
				}
			}
			if(state.currentOperand === '0'){
				return state
			}
			if(state.currentOperand.length === 1){
				return{
					...state,
					currentOperand:'0'
				}
			}
			return{
				...state,
				currentOperand:state.currentOperand.slice(0,-1)
			}
		default:
			break				
	}
}
