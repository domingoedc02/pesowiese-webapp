import "../../scss/cards/CustomCard.scss"
import * as React from "react";
import BasicDrawer from "../drawer/BasicDrawer";



export default function CustomCard(){
    const [state, setState] = React.useState({
        right: false,
    });

    const toggleDrawer = (open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }
        setState({ ...state, right: open });
    };


    return(
        <div className="custom-card" onClick={toggleDrawer(true)}>
            <div className="card-header">
                <h4>Unionbank Credit Card</h4>
                <span>Overdue</span>
            </div>
            <h5>Amount: P 15,000</h5>
            <h5>Due Date: 12/24/2024</h5>
            <BasicDrawer action={state.right}/>
        </div>
    )
}
