import * as React from 'react';
import LinearProgress from '@mui/material/LinearProgress';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import {useState} from "react";

export default function BasicProgress(props) {

    return (
        <LinearProgress
            variant="determinate"
            value={props.value}
            label={"10"}
            sx={{
                '& .MuiLinearProgress-bar': {
                    backgroundColor: '#1976d2', // Blue color for the progress bar
                },
                backgroundColor: '#e0e0e0', // Light grey background for the track
                marginTop: 0,
                height: '10px'
            }}
        />
    );
}
