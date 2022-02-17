
import React from 'react';
import Box from "../components/Box";
import Title from "../components/Title";
import Grid from "../components/Grid";

export default function HomePage() {
    return (
        <div>
            <Title text='Titulo de HomePage' />
            <Box>
                <Grid container>
                    <Grid>1</Grid>
                    <Grid>2</Grid>
                    <Grid>3</Grid>
                    <Grid>4</Grid>
                    <Grid>5</Grid>
                    <Grid>6</Grid>
                </Grid>
            </Box>
        </div>
    );
}
