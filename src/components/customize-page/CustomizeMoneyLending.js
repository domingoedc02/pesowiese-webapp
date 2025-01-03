import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import CreditCard from "../cards/CreditCard";
import React from "react";
import LendingCard from "../cards/LendingCard";


export default function CustomizeMoneyLending(){

    return (
        <Box>
            <Grid container spacing={1}>
                <Grid item xs={12} sm={12}>
                    <div className="customize-cashflow-header">
                        <h2>MoneyLending</h2>
                        <Button className="new-cashflow-button">
                            Add Lending
                        </Button>
                    </div>
                </Grid>
                <Grid item xs={12} sm={12}>
                    <LendingCard/>
                </Grid>
            </Grid>
            {/* Pass the close handler as a prop */}

        </Box>
    );
}
