import React from "react";
import Monitor from "../molecules/Monitor";
import NumberButtons from "../molecules/NumberButtons";
import OtherButtons from "../molecules/OtherButtons";
import OperatorButtons from "../molecules/OperatorButtons";
import CalculatorProvider from "../../hooks/providers/CalculatorProvider";
import { Grid } from "@mui/material";
import "../../styles/molecules/OtherButtons.scss";
import "../../styles/molecules/NumberButtons.scss";

function Calculator() {
    return (
        <div className="calculator">
            <CalculatorProvider>
                <Grid
                    container
                >
                    <Grid item xs={12}><Monitor /></Grid>
                    <Grid
                        container
                        item
                        xs={9}
                    >
                        <Grid item xs={12}>
                            <OtherButtons/>
                        </Grid>
                        <Grid item xs={12}>
                            <NumberButtons />
                        </Grid>
                    </Grid>
                    <Grid item xs={3}>
                        <OperatorButtons />
                    </Grid>
                </Grid>
            </CalculatorProvider>
        </div>
    );
}

export default Calculator;
