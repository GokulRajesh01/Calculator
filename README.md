# Simple Calculator
This is a lightweight and responsive calculator application built using React. It mimics a real-world basic calculator with support for operations like addition, subtraction, multiplication, and division. The application is styled with pure CSS and uses React's useReducer hook for state management.

# Features
1. Basic arithmetic operations: `+`, `-`, `*`, `/`
2. Proper digit formatting (e.g., 1,00,000 instead of 100000)
3. Floating-point support
4. Responsive and visually clean interface

# How It Works
The calculator’s logic is managed using a `useReducer` hook. The core concepts are handled as:
1. **ACTIONS**: Define all operations (digit entry, operation choice, clear, delete, evaluate).
2. **Reducer**: Manages the calculator’s state and logic based on user input.
3. **Evaluate Function**: Performs arithmetic based on current and previous operands.
4. **Formatting**: Operand display is formatted for readability (e.g., commas).

# Getting Started
1. Clone the repository 
   _git clone https://github.com/GokulRajesh01/Simple-Calculator.git_
   cd simple_calculator
2. Start Development Server using 
   _npm start_
   Visit http://localhost:3000 in your browser to interact with the calculator.

# Technologies Used
1. React with useReducer Hook
2. JavaScript
3. CSS Grid and Flexbox

I did this as a project to study and felt it to be great as a beginner project to understand component design, event handling and reducer-based state management in modern React.