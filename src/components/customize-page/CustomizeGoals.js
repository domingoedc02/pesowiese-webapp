import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import React from "react";
import GoalCard from "../cards/GoalCard";


export default function CustomizeGoals(){

    return(
        <Grid container spacing={1}>
            <Grid item xs={12} sm={12}>
                <div className="customize-cashflow-header">
                    <h2>Goals</h2>
                    <Button className="new-cashflow-button">
                        New Goals
                    </Button>
                </div>
            </Grid>
            <Grid item xs={12} sm={12}>
                <GoalCard/>
            </Grid>
        </Grid>
    )
}
