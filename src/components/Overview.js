import Grid from "@mui/material/Grid";
import AddTransaction from "./SpeedDial";
import { PageContainer } from "@toolpad/core/PageContainer";
import * as React from "react";
import BasicCard from "./cards/BasicCard";
import Box from "@mui/material/Box";
import DenseTable from "./tables/DenseTable";
import CustomCard from "./cards/CustomCard";
import BasicPieChart from "./charts/pie/BasicPieChart";
import Budget from "./Budget";
import BasicDonutChart from "./charts/donut/BasicDonutChart";
import SubcategoriesBody from "./SubcategoriesBody";
import AOS from "aos";
import "aos/dist/aos.css";
import {useEffect, useState} from "react";
import "../scss/Overview.scss"
import CloseIcon from '@mui/icons-material/Close';
import Button from "@mui/material/Button";


export default function Overview() {
    const [activeGrid, setActiveGrid] = useState(1);

    const handleItemClick = () => {
        setActiveGrid(2);
    };

    const closeHandleItemClick = () => {
        setActiveGrid(1);
    }

    useEffect(() => {
        AOS.init({
            duration: 1000,  // Animation duration
        });
    }, []);


    return (
        <PageContainer title="Overview">
            <Grid container spacing={1}>
                <Grid data-aos="zoom-out-right" item xs={12} sm={4} style={{margin: '0 auto'}}>
                    <BasicCard title="Monthly Income" number="65,000" currency="₱" status="decrease" percentage="-5%" />
                </Grid>
                <Grid data-aos="zoom-out-right" item xs={12} sm={4} style={{margin: '0 auto'}}>
                    <BasicCard title="Monthly Expenses" number="45,000" currency="₱" status="increase" percentage="+10%" />
                </Grid>
                <Grid data-aos="zoom-out-left" item xs={12} sm={4} style={{margin: '0 auto'}}>
                    <BasicCard title="Balance" number="15,000" currency="₱" status="decrease" percentage="-8%" />
                </Grid>
                <Grid data-aos="zoom-out-right" item xs={12} sm={6} style={{margin: '0 auto'}}>
                    <BasicCard title="Average Daily Spending" number="15,000" currency="₱" status="decrease" percentage="-8%" />
                </Grid>
                <Grid data-aos="zoom-out-left" item xs={12} sm={6} style={{margin: '0 auto'}}>
                    <BasicCard title="Monthly Credit Card Spending" number="15,000" currency="₱" status="decrease" percentage="-8%" />
                </Grid>
                <Grid data-aos="zoom-out-right" item xs={12} sm={12} className="budgetHeader">
                    <h3>Budget Details</h3>
                    {(activeGrid === 2)? <Button variant="text" onClick={closeHandleItemClick}><CloseIcon/></Button>: <></>}
                </Grid>
                <Grid container spacing={1} className={`grid-container ${activeGrid === 1 ? 'active' : 'hidden'}`}>
                    <Grid data-aos="zoom-out-left" item xs={12} sm={4} order={{ xs: 2, sm: 2 }}>
                        <Budget onItemClick={handleItemClick}/>
                    </Grid>
                    <Grid data-aos="zoom-out-right" item xs={12} sm={8} order={{ xs: 1, sm: 1 }}>
                        <BasicPieChart/>
                    </Grid>
                </Grid>
                <Grid container spacing={1} className={`grid-container ${activeGrid === 2 ? 'active' : 'hidden'}`}>
                    <Grid item xs={6} sm={4} order={{ xs: 2, sm: 2 }}>
                        <Budget />
                    </Grid>
                    <Grid item xs={6} sm={4} order={{ xs: 1, sm: 1 }}>
                        <BasicDonutChart/>
                    </Grid>
                    <Grid item xs={12} sm={4} order={{ xs: 3, sm: 3 }}>
                        <SubcategoriesBody/>
                    </Grid>
                </Grid>
                <Grid container spacing={1} >
                    <Grid item xs={12} sm={8} order={{ xs: 2, sm: 1 }}>
                        <h3>Latest Transaction History</h3>
                        <DenseTable/>
                    </Grid>
                    <Grid   item xs={12} sm={4} order={{ xs: 1, sm: 2 }}>
                        <h3>Upcoming Dues</h3>
                        <Box style={{height: "400px", overflowY: "auto", backgroundColor: '#2b2929', borderRadius: '10px'}}>
                            <CustomCard/>
                            <CustomCard/>
                            <CustomCard/>
                            <CustomCard/>
                            <CustomCard/>
                            <CustomCard/>
                            <CustomCard/>
                        </Box>
                    </Grid>
                </Grid>
                <Grid item xs={12} sm={3}>
                    <AddTransaction />
                </Grid>
            </Grid>
        </PageContainer>
    );
}
