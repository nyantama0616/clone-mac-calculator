import React from "react";
import { AspectRatio } from "@mui/joy";
import { Button } from "@mui/material";
import "../../styles/molecules/Button.scss";

type MyButtonProps = {
    value: string;
};
export default function MyButton({value}: MyButtonProps) {
    return (  
        <Button className="btn-test" onClick={e => {}}>{value}</Button>
    );
}
