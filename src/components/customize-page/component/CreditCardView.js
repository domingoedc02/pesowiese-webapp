import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";


export default function CreditCardView(props){

    return(
        <Grid container spacing={1}>
            <Grid item xs={12} sm={12}>
                <div>
                    <span style={{display: 'block', fontSize: '12px', fontWeight: 'bold'}}>Name</span>
                    <span>{props.data.name}</span>
                </div>
                <div>
                    <span style={{display: 'block', fontSize: '12px', fontWeight: 'bold'}}>Last 4 Digits</span>
                    <span>{props.data.lastFourDigits}</span>
                </div>
                <div>
                    <span style={{display: 'block', fontSize: '12px', fontWeight: 'bold'}}>Credit Limit</span>
                    <span>P {props.data.creditLimit}</span>
                </div>
                <div>
                    <span style={{display: 'block', fontSize: '12px', fontWeight: 'bold'}}>Card Type</span>
                    <span>{props.data.cardType}</span>
                </div>
                <div>
                    <span style={{display: 'block', fontSize: '12px', fontWeight: 'bold'}}>Statement Date</span>
                    <span>Every 8th of the month</span>
                </div>
                <div>
                    <span style={{display: 'block', fontSize: '12px', fontWeight: 'bold'}}>Due Date</span>
                    <span>18 days after statement day</span>
                </div>
            </Grid>
            <Grid item xs={12}>
                <div style={{display: 'flex', justifyContent: 'space-between'}}>
                    <Button sx={{backgroundColor: '#c6c1c1', color: 'black'}}>
                    Edit
                    </Button>
                    <Button sx={{backgroundColor: '#a84e4e'}}>
                        Delete
                    </Button>
                </div>
            </Grid>
        </Grid>
    )
}
