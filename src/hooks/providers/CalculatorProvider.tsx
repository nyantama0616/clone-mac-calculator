import React, { useState, createContext, useEffect } from "react";

// export const CalculatorContext = createContext<CalcReturnValue>({state: {left: "", right: "", displayValue: "", operator: () => {}}, sendValue: () => {}});
export const CalculatorContext = createContext<CalcReturnValue>({displayValue: "", sendValue: () => {}});

type CalculatorProviderProps = {
    children: React.ReactNode
};
export default function CalculatorProvider({ children }: CalculatorProviderProps) {
    const calculator = useCalculator();

    return <CalculatorContext.Provider value={calculator}>
        {children}
    </CalculatorContext.Provider>
}

type CalcState = {
    left: string
    right: string
    displayValue: string
    operator: () => void
};
type CalcReturnValue = {
    displayValue: string
    sendValue: (value: string) => void
};
function useCalculator(): CalcReturnValue {
    const initialOperator = () => {
        setState(prev => {
            const newState = { ...prev };
            newState.left = prev.right;
            newState.right = "";
            return newState;
        });
    };

    const initialState = {
        left: "",
        right: "",
        displayValue: "0",
        operator: initialOperator,
    };

    const [state, setState] = useState<CalcState>(initialState);

    function allClear() {
        setState(initialState);
    }

    function plusMinus() {
        setState(prev => {
            const value = parseFloat(prev.right);
            if (Number.isNaN(value)) return prev; //rightが空文字列の場合を考慮
            const newValue = (-1 * value).toString();
            const newState = { ...state };
            newState.right = newValue;
            newState.displayValue = newValue;
            return newState;
        });
    }

    function percent() {
        const value = parseFloat(state.right);
        if (!Number.isNaN(value)) {
            const newValue = (0.01 * value).toString();
            const newState = state;
            newState.right = newValue;
            newState.displayValue = newValue;
            setState(newState);
        }
    }

    function dot() {
        const count = (state.right.match(/\./g) || []).length;
        if (count > 0) return;

        const value = parseFloat(state.right);
        let newValue;
        if (!Number.isNaN(value)) {
            newValue = state.right + ".";
        } else {
            newValue = "0.";
        }

        const newState = state;
        newState.right = newValue;
        newState.displayValue = newValue;
        setState(newState);
    }

    function divide() {
        setState(prev => {
            const leftValueParsed = parseFloat(prev.left);
            const rightValueParsed = parseFloat(prev.right);

            const newValue = (leftValueParsed / rightValueParsed).toString();
            const newState = { ...prev };
            newState.left = newValue;
            newState.right = "";
            newState.displayValue = newValue;
            return newState;
        });
    }

    function multiply() {
        setState(prev => {
            const leftValueParsed = parseFloat(prev.left);
            const rightValueParsed = parseFloat(prev.right);

            const newValue = (leftValueParsed * rightValueParsed).toString();
            const newState = { ...prev };
            newState.left = newValue;
            newState.right = "";
            newState.displayValue = newValue;
            return newState;
        });
    }

    function minus() {
        setState(prev => {
            const leftValueParsed = parseFloat(prev.left);
            const rightValueParsed = parseFloat(prev.right);

            const newValue = (leftValueParsed - rightValueParsed).toString();
            const newState = { ...prev };
            newState.left = newValue;
            newState.right = "";
            newState.displayValue = newValue;
            return newState;
        });
    }

    function plus() {
        setState(prev => {
            const leftValueParsed = parseFloat(prev.left);
            const rightValueParsed = parseFloat(prev.right);

            const newValue = (leftValueParsed + rightValueParsed).toString();
            const newState = { ...prev };
            newState.left = newValue;
            newState.right = "";
            newState.displayValue = newValue;
            return newState;
        });
    }

    function equal() {
        setState(prev => {
            const newState = { ...prev };
            newState.left = prev.right;
            newState.right = "";
            newState.displayValue = "";
            return newState;
        });
    }

    function appendNum(value: String) {
        setState(prev => {
            const newValue = state.right + value;
            const newState = { ...prev };
            newState.right = newValue;
            newState.displayValue = newValue;
            return newState
        });
    }

    function setOperator(operator: () => void) {
        state.operator();
        setState(prev => {
            const newState = { ...prev };
            newState.operator = operator;
            return newState;
        });
    }

    useEffect(() => {
        console.log(`left: ${state.left}, right: ${state.right}, disPlay: ${state.displayValue}`);
    }, [state]);

    function sendValue(value: string) {        
        if (!Number.isNaN(parseFloat(value))) { //valueが数値の場合
            appendNum(value);
            return;
        }

        switch (value) {
        case "AC":
            allClear();
            break;
        case "+/-":
            plusMinus();
            break;
        case "%":
            percent();
            break;
        case ".":
            dot();
            break;
        case "÷":
            setOperator(divide);
            break;
        case "✕":
            setOperator(multiply);
            break;
        case "-":
            setOperator(minus);
            break;
        case "+":
            setOperator(plus);
            break;
        case "=":
            setOperator(() => { });
            break;
        }
    }

    return { displayValue: state.displayValue, sendValue };
}
