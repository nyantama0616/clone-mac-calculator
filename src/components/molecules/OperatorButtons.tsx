import React from "react";
import { Button, Grid } from "@mui/material";
import "../../styles/molecules/OperatorButtons.scss";
import ButtonBase from "./ButtonBase";
import AspectRatio from "@mui/joy/AspectRatio";

export default function OperatorButtons() {
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

    return (
        <div className="operator-buttons">
            <Grid
                container
            >
                <OtherButton value={ "÷" } onClick={ divide } />
                <OtherButton value={ "✕" } onClick={ multiply } />
                <OtherButton value={ "-" } onClick={ minus } />
                <OtherButton value={ "+" } onClick={ plus } />
                <OtherButton value={ "=" } onClick={ equal } />
            </Grid>
        </div>
    )
}

type OtherButtonProps = {
    value: string;
    onClick: (value: string) => void
};
function OtherButton({value, onClick}: OtherButtonProps) {
    return (
        <Grid item xs={12}>
            <AspectRatio ratio="1.41/1">
                <ButtonBase value={value} onClick={onClick} />
            </AspectRatio>
        </Grid>
    );
}
