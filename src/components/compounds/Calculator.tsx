import React from "react";
import Monitor from "../molecules/Monitor";
import NumberButtons from "../molecules/NumberButtons";
import OtherButtons from "../molecules/OtherButtons";
import OperatorButtons from "../molecules/OperatorButtons";
import { Grid } from "@mui/material";
import "../../styles/molecules/OtherButtons.scss";
import "../../styles/molecules/NumberButtons.scss";

function Calculator() {
    return (
        <div className="calculator">
            <Grid
                container
                // justifyContent={"space-around"}
                // justifyContent={"stretch"}
            >
                <Grid item xs={12}><Monitor /></Grid>
                <Grid
                    container
                    // direction={"column"}
                    item
                    xs={9}
                >
                    <Grid item xs={12}>
                        <OtherButtons/>
                        {/* <div className="other-buttons">1</div> */}
                    </Grid>
                    <Grid item xs={12}>
                        <NumberButtons />
                        {/* <div className="number-buttons">2</div> */}
                    </Grid>
                </Grid>
                <Grid item xs={3}>
                    <OperatorButtons />
                </Grid>
            </Grid>
        </div>
    );
}

export default Calculator;
