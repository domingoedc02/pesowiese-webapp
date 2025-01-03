import "../../scss/cards/BasicCard.scss"
import {Badge} from "@mui/material";


export default function BasicCard(props){

    const badgeHander = () => {
        if (props.title === "Monthly Expenses") {
            if (props.status === "increase") return <span className="badge decrease">{props.percentage}</span>
            else return <span className="badge increase">{props.percentage}</span>
        } else {
            return <span className={`badge ${props.status}`}>{props.percentage}</span>
        }
    }

    return (
        <div className="basic-card" >
            <h2>{(props.currency !== undefined)? props.currency: ""} {props.number}
                {(props.percentage !== undefined)?
                    badgeHander() : ""
                }
            </h2>
            <h6>{props.title}</h6>
        </div>
    )
}
