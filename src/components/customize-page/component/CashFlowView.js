import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";


export default function CashFlowView(){

    return(
        <Grid container spacing={1}>
            <Grid item xs={12} sm={12}>
                <div>
                    <span style={{display: 'block', fontSize: '12px', fontWeight: 'bold'}}>Company</span>
                    <span>IBM Solutions Delivery Inc</span>
                </div>
                <div>
                    <span style={{display: 'block', fontSize: '12px', fontWeight: 'bold'}}>Employment Status</span>
                    <span>Full Time</span>
                </div>
                <div>
                    <span style={{display: 'block', fontSize: '12px', fontWeight: 'bold'}}>Monthly Salary</span>
                    <span>P 78,750</span>
                </div>
                <div>
                    <span style={{display: 'block', fontSize: '12px', fontWeight: 'bold'}}>Pay Frequency</span>
                    <span>Once a Month</span>
                </div>
                <div>
                    <span style={{display: 'block', fontSize: '12px', fontWeight: 'bold'}}>Pay Day</span>
                    <span>13th of the month</span>
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
