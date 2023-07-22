import React from 'react';
import Calculator from '../compounds/Calculator';
// import { Container } from '@mui/material';
// import { AspectRatio } from '@mui/icons-material';
import { AspectRatio } from '@mui/joy';
import GridPractice from '../compounds/GridPractice';

export function Home() {
    return (
        <div className="home">
            <h1>home</h1>

            {/* <Container sx={{ py: 8 }} maxWidth="md" fixed> */}
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
            {/* </Container> */}
            {/* <GridPractice /> */}
        </div>
    )
}

export default Home;
