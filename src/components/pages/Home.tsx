import React from 'react';
import Calculator from '../compounds/Calculator';
import { AspectRatio } from '@mui/joy';
import GridPractice from '../compounds/GridPractice';
import { Grid } from '@mui/material';

export function Home() {
    return (
        <div className="home">
            <h1>home</h1>

            <Grid
                container
                justifyContent={"center"}
                alignItems={"center"}
                height={1000} //ここを親要素の100%にしたい
            >
                <AspectRatio
                    variant="outlined"
                    ratio="3/4"
                    sx={{
                        width: 500,
                        bgcolor: 'background.level2',
                        borderRadius: 'md',
                    }}
                    >
                    <Calculator/>
                </AspectRatio>
            </Grid>
        </div>
    )
}

export default Home;
