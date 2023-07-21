import React from "react";
import { AspectRatio } from "@mui/joy";
import { Button } from "@mui/material";
import "../../styles/molecules/ButtonBase.scss";

type ButtonBaseProps = {
    value: string;
    onClick: (value: string) => void
};
export default function ButtonBase({value, onClick}: ButtonBaseProps) {
    return (  
        // <AspectRatio ratio="1.41/1">
            // <Button onClick={e => onClick(value)}>{value}</Button>
            <Button className="btn-test" onClick={e => onClick(value)}>{value}</Button>
        // </AspectRatio>
        // <>
        // <div className="btn-test">0</div>
        // </>
    );
}
