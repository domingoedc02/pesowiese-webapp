import SimCardIcon from '@mui/icons-material/SimCard';
import "../../scss/cards/CreditCard.scss";
import Grid from "@mui/material/Grid";
import CustomizeModal from "../modals/CustomizeModal";
import React, { useState } from "react";

export default function CreditCard(props) {
    const [activeCard, setActiveCard] = useState(null); // Track the active card

    const handleOpenModal = (cardName) => setActiveCard(cardName);
    const handleCloseModal = () => setActiveCard(null);

    const selectedData = props.data.find(item => item.name === activeCard);

    return (
        <Grid container spacing={1}>
            {props.data.map((item) => (
                <Grid item xs={12} sm={6} md={6} lg={4} key={item.name}>
                    <div
                        className="credit-card"
                        onClick={() => handleOpenModal(item.name)}
                    >
                        <h4>{item.name}</h4>
                        <div className="body">
                            <span>{(props.type === "creditcard")? "**** **** **** " + item.lastFourDigits : item.accountNumber}</span>
                            <SimCardIcon className="icon" />
                        </div>
                        <div className="footer">
                            <h5>P {(props.type === "creditcard")? item.creditLimit: item.balance}</h5>
                            <h5>{item.cardType}</h5>
                        </div>
                    </div>

                </Grid>
            ))}
            <CustomizeModal
                isModalOpen={Boolean(activeCard)}
                onClose={handleCloseModal}
                title="Credit Card"
                data={selectedData}
            />
        </Grid>

    );
}
