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
    displayValue: string
    sendValue: (value: string) => void
};
function useCalculator(): CalcReturnValue {
    const [leftValue, setLeftValue] = useState<string>("");
    const [rightValue, setRightValue] = useState<string>("");
    const [operator, setOperator] = useState<Function>(() => { });
    const [displayValue, setDisplayValue] = useState<string>("0");

    function allClear() {
        setLeftValue("");
        setRightValue("");
        setDisplayValue("0");
    }

    function plusMinus() {
        const value = parseFloat(rightValue);
        if (!Number.isNaN(value)) {
            const newValue = (-1 * value).toString();
            setRightValue(newValue);
            setDisplayValue(newValue);
        }
    }

    function percent() {
        const value = parseFloat(rightValue);
        if (!Number.isNaN(value)) {
            const newValue = (0.01 * value).toString();
            setRightValue(newValue);
            setDisplayValue(newValue);
        }
    }

    function dot() {
        const count = (rightValue.match(/\./g) || []).length;
        if (count > 0) return;
        
        const value = parseFloat(rightValue);
        let newValue;
        if (!Number.isNaN(value)) {
            newValue = rightValue + ".";
        } else {
            newValue = "0.";
        }

        setRightValue(newValue);
        setDisplayValue(newValue);
    }

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

    function sendValue(value: string) {        
        if (!Number.isNaN(parseFloat(value))) { //valueが数値の場合
            const newValue = rightValue + value;
            setRightValue(newValue);
            setDisplayValue(newValue);
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
        }
    }

    return { displayValue, sendValue };
}
