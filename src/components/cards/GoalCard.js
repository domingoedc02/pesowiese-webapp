import Grid from "@mui/material/Grid";
import SavingsIcon from '@mui/icons-material/Savings';
import "../../scss/cards/GoalCard.scss"

export default function GoalCard(){

    return(
        <Grid container spacing={1}>
            <Grid item xs={12} sm={6}>
                <div className="goal-card">
                    <div className="header">
                        <SavingsIcon className="icon"/>
                    </div>
                    <div className="sbody">
                        <div className="name">
                            <h4>Ipon Challenge</h4>
                            <span>Ongoing</span>
                        </div>
                        <h5>P 100,000 <span>25%</span></h5>
                    </div>
                </div>
            </Grid>
        </Grid>
    )
}
