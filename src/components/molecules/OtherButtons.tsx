import React from "react";
import { Grid, Button } from "@mui/material";
import "../../styles/molecules/OtherButtons.scss";
import ButtonBase from "./ButtonBase";
import { AspectRatio } from "@mui/joy";

export default function OtherButtons() {
    function allClear() {
        console.log("all clear");
    }
    
    function plusMinus() {
        console.log("plus minus");
    }
    
    function percent() {
        console.log("percent");
    }

    return (
        <div className="other-buttons">
            <Grid
                container
                // item
                // justifyContent={"space-around"}
            >
                <OtherButton value={ "AC" } onClick={ allClear } />
                <OtherButton value={ "+/-" } onClick={ plusMinus } />
                <OtherButton value={ "%" } onClick={ percent } />
            </Grid>
        </div>
    );
}

type OtherButtonProps = {
    value: string;
    onClick: () => void
};
function OtherButton({value, onClick}: OtherButtonProps) {
    return (
        <Grid item xs={4}>
            <AspectRatio ratio="1.41/1">
            {/* <AspectRatio ratio="2/1"> */}
                <ButtonBase value={value} onClick={onClick} />
            </AspectRatio>
        </Grid>
    );
}
