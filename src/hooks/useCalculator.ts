import React, {useState} from "react";

type CalcReturnValue = {
    leftValue: string
    rightValue: string
    sendValue: (value: string) => void
};

export default function useCalculator(): CalcReturnValue {
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

    function sendValue(value: string) {

    }

    return { leftValue, rightValue, sendValue };
}
