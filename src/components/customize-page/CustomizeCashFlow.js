import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import React, { useState } from "react";
import Box from "@mui/material/Box";
import "../../scss/customize-page/CustomizeCashFlow.scss"
import CustomizeModal from "../modals/CustomizeModal";

export default function CustomizeCashFlow() {
    const [isModalClicked, setIsModalClicked] = useState(false);

    const handleOpenModal = () => setIsModalClicked(true);
    const handleCloseModal = () => setIsModalClicked(false);

    return (
        <Box>
            <Grid container spacing={1}>
                <Grid item xs={12} sm={12}>
                    <div className="customize-cashflow-header">
                        <h2>Cash Flow</h2>
                        <Button className="new-cashflow-button">
                            New Income
                        </Button>
                    </div>
                </Grid>
                <Grid item xs={12} sm={3} className="body-cashflow">
                    <div onClick={handleOpenModal}>
                        <h4>IBM Solutions Delivery Inc</h4>
                        <span>Full Time</span>
                    </div>
                </Grid>
            </Grid>
            {/* Pass the close handler as a prop */}
            <CustomizeModal isModalOpen={isModalClicked} onClose={handleCloseModal} title="Cash Flow" />
        </Box>
    );
}
