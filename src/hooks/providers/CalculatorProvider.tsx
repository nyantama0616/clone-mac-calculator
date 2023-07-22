import React, { useState, createContext } from "react";

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

type CalcReturnValue = {
    // leftValue: string
    // rightValue: string
    displayValue: string
    sendValue: (value: string) => void
};
function useCalculator(): CalcReturnValue {
    const [leftValue, setLeftValue] = useState<string>("0");
    const [rightValue, setRightValue] = useState<string>("0");
    const [operator, setOperator] = useState<Function>(() => { });

    function divide() {

    }

    function multiply() {

    }

    function minus() {

    }

    function plus() {

    }

    function equal() {

    }

    const displayValue = leftValue;
    function sendValue(value: string) {
        console.log(`send!: ${value}`);
        setLeftValue(value);
    }

    return { displayValue, sendValue };
}
