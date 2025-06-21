export default function evaluate({currentOperand, previousOperand, operation}){
	const prev = parseFloat(previousOperand)
	const curr = parseFloat(currentOperand)
	if(isNaN(prev) || isNaN(curr)){
		return ""
	}
	switch(operation){
		case "+":	// Addition case
			return (prev+curr).toString()
		case "-":   // Subtraction case
			return (prev-curr).toString()
		case "*":   // Multiplication case
			return (prev*curr).toString()	
		case "/":	// Division case
			return (prev/curr).toString()
		default:
			break
	}
}