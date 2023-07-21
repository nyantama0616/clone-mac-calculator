import React from "react";
import "../../styles/compounds/GridPractice.scss";
import { Grid } from "@mui/material";
import { useState, useEffect } from "react";
import { AspectRatio } from '@mui/joy';

export default function GridPractice() {
    const [width, setWidth] = useState(0);

    useEffect(() => {
        window.addEventListener("resize", () => {
            setWidth(window.outerWidth);
        });
    }, []);
    return <div className="grid-practice">
        <h3>{width}</h3>
        <Grid
            container
            justifyContent={"space-around"}
            alignItems={"center"}
            spacing={2}
            // direction={"row"}
        >
            <Item />
            <Item />
            <Item />
            <Item />
            <Item />
            <Item />
        </Grid>
    </div>
}

function Item() {
    return (
        <Grid item xs={6} lg={4} xl={3}>
            <AspectRatio
                ratio={"1.41/1"}
            >
                <div className="item">1</div>
            </AspectRatio>
        </Grid>
    );
}
