import {CurrentDate} from "../../Constants";
import "../../scss/cards/PremiumCard.scss"


export default function PremiumCard(props){
    const percentageHandler = () => {
        if (props.title === "Liabilities") {
            if (props.status === "increase") return <span className="decrease">{props.percentage}</span>
            else return <span className="increase">{props.percentage}</span>
        } else return <span className={props.status}>{props.percentage}</span>

    }
    return (
        <div className={`premium-card ${props.title}`}>
            <div className="card-header">
                <h2>{props.title}</h2>
                <h2>P {props.amount}</h2>
            </div>
            <div className="card-body">
                <p>As of today, {CurrentDate()}</p>
                {percentageHandler()}
            </div>
        </div>
    )
}
