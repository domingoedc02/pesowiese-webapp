import Grid from "@mui/material/Grid";
import PersonIcon from '@mui/icons-material/Person';
import "../../scss/cards/LendingCard.scss"

export default function LendingCard(){

    return(
        <Grid container spacing={1}>
            <Grid item xs={12} sm={4}>
                <div className="lending-card">
                    <div className="profile">
                        <PersonIcon className="icon"/>
                    </div>
                    <div className="item-body">
                        <h4>Edson John Domingo</h4>
                        <h5>P 5,000</h5>
                        <span>Lender</span>
                    </div>
                </div>
            </Grid>
        </Grid>
    )
}
