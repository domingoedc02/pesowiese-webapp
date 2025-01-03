import {PageContainer} from "@toolpad/core/PageContainer";
import Grid from "@mui/material/Grid";
import VerticalTabs from "./tabs/VerticalTabs";
import {useState} from "react";
import HorizontalTabs from "./tabs/HorizontalTabs";


export default function CustomizeBody(){
    const [title, setTitle] = useState([
        {
            name: "Category",
            value: 0
        },
        {
            name: "Cash Flow",
            value: 1
        },
        {
            name: "Credit Card",
            value: 2
        },
        {
            name: "Money Lending",
            value: 3
        },
        {
            name: "Asset & Liabilities",
            value: 4
        },
        {
            name: "Bank Account",
            value: 5
        },
    ])
    const [selectedValue, setSelectedValue] = useState(0)
    const handleClicked = (value) => {
        setSelectedValue(value)
    }

    return(
        <PageContainer >
            <VerticalTabs onTabClicked={handleClicked}/>
        </PageContainer>
    )
}
