import React, {useContext} from "react";
import "../../styles/molecules/Monitor.scss";
import { CalculatorContext } from "../../hooks/providers/CalculatorProvider";

export default function Monitor() {
    const calcCtx = useContext(CalculatorContext);

    return (
        <div className="monitor">
            <h1>{calcCtx.displayValue}</h1>
        </div>
    )
}
