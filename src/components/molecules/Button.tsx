import React, {useContext} from "react";
import { Button } from "@mui/material";
import { CalculatorContext } from "../../hooks/providers/CalculatorProvider";
import "../../styles/molecules/Button.scss";

type MyButtonProps = {
    value: string;
};
export default function MyButton({ value }: MyButtonProps) {
    const calcCxt = useContext(CalculatorContext);

    return (  
        <Button className="btn-test" onClick={() => calcCxt.sendValue(value)}>{value}</Button>
    );
}
