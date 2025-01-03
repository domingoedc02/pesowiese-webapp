import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import CreditCard from "../cards/CreditCard";
import Box from "@mui/material/Box";
import React from "react";

const bankcards = [
    {
        name: "BPI Payroll",
        accountNumber: "1234",
        balance: "15,000",
    },
    {
        name: "BPI Savings",
        accountNumber: "2345",
        balance: "30,000",
    },
    {
        name: "Maya Savings",
        accountNumber: "3456",
        balance: "5,000",
    },
]
export default function CustomizeBankAccount(){

    return (
        <Box>
            <Grid container spacing={1}>
                <Grid item xs={12} sm={12}>
                    <div className="customize-cashflow-header">
                        <h2>Credit Card</h2>
                        <Button className="new-cashflow-button">
                            New Credit Card
                        </Button>
                    </div>
                </Grid>
                <Grid item xs={12} sm={12}>
                    <CreditCard data={bankcards} type="bankcard"/>
                </Grid>
            </Grid>
            {/* Pass the close handler as a prop */}

        </Box>
    )
}
