import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import "../scss/Budget.scss"
import BasicProgress from "./progress/BasicProgress";
import Box from "@mui/material/Box";


export default function Budget({ onItemClick }){

    return(
        <div className="budget">
            <div className="header">
                <h4>Categories</h4>
                <h4>₱ 40,000</h4>
            </div>
            <div className="item" onClick={onItemClick}>
            Utilities
            </div>
            <div className="item">
                Shopping
            </div>
            <div className="item">
                Groceries
            </div>
            <div className="item">
                Transportation
            </div>
            <div className="item">
                Entertainment
            </div>
            <div className="item">
                Rent
            </div>
            <div className="item">
                Gifts
            </div>
            <div className="item">
                Pets
            </div>
            <div className="item">
                Insurance
            </div>
            <div className="item">
                Personal Care
            </div>
            <div className="item">
                Health
            </div>
            <div className="item">
                Savings
            </div>

        </div>
    )
}
