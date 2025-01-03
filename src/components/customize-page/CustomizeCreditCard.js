import React, {useState} from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import CustomizeModal from "../modals/CustomizeModal";
import CreditCard from "../cards/CreditCard";

const creditcards = [
    {
        name: "UnionBank Credit Card",
        lastFourDigits: "1234",
        creditLimit: "15,000",
        cardType: "Visa"
    },
    {
        name: "BPI Credit Card",
        lastFourDigits: "2345",
        creditLimit: "30,000",
        cardType: "Visa"
    },
    {
        name: "Maya Credit",
        lastFourDigits: "3456",
        creditLimit: "5,000",
        cardType: "Visa"
    },
]

export default function CustomizeCreditCard(){

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
                    <CreditCard data={creditcards} type="creditcard"/>
                </Grid>
            </Grid>
            {/* Pass the close handler as a prop */}

        </Box>
    );

}
