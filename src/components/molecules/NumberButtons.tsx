import React from "react";
import { Grid } from "@mui/material";
import "../../styles/molecules/NumberButtons.scss";
import AspectRatio from "@mui/joy/AspectRatio";
import Button from "./Button";

export default function NumberButtons() {
    const buttons1To9 = [...Array(9)].map((_, i) => {
        const value = (i + 1).toString();
        return <NumberButton key={i} value={ value } onClick={() => { console.log(value); }} />
    });

    function onClick(value: string) {
        console.log(value);
    }

    return (
        <div className="number-buttons">
            <Grid
                container
                direction="column"
            >
                <Row values={["7", "8", "9"]} onClick={onClick}/>
                <Row values={["4", "5", "6"]} onClick={onClick}/>
                <Row values={["1", "2", "3"]} onClick={onClick}/>
                <Grid
                    container
                    item
                    justifyContent={"space-around"}
                    xs={3}
                >
                    <Grid item xs={8}>
                        <AspectRatio ratio="2.82/1">
                            <Button value={"0"} />
                        </AspectRatio>
                    </Grid>
                    <Grid item xs={4}>
                        <AspectRatio ratio="1.41/1">
                            <Button value={"."}/>
                        </AspectRatio>
                    </Grid>
                </Grid>
            </Grid>
        </div>
    )
}

type NumberButtonProps = {
    value: string;
    onClick: (value: string) => void
};
function NumberButton({value, onClick}: NumberButtonProps) {
    return (
        <Grid item xs={4}>
            <AspectRatio ratio="1.41/1">
                <Button value={value} />
            </AspectRatio>
        </Grid>
    );
}

type RowProps = {
    values: string[];
    onClick: (value: string) => void
};
function Row({ values, onClick }: RowProps) {
    return (
        <Grid
            container
            item
            xs={3}
        >
            <NumberButton value={values[0]} onClick={onClick} />
            <NumberButton value={values[1]} onClick={onClick} />
            <NumberButton value={values[2]} onClick={onClick} />
        </Grid>
        
    );
}
