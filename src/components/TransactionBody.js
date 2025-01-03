import Grid from "@mui/material/Grid2";
import AddTransaction from "./SpeedDial";
import {PageContainer} from "@toolpad/core/PageContainer";
import * as React from "react";
import {styled} from "@mui/material/styles";
import BasicCard from "./cards/BasicCard";
import BasicTable from "./tables/BasicTable";

const Skeleton = styled('div')(({ theme, height }) => ({
    backgroundColor: theme.palette.action.hover,
    borderRadius: theme.shape.borderRadius,
    height,
    content: '" "',
}));

export default function TransactionBody(props){

    return(
        <PageContainer title="Transaction History" segment="test">
            <Grid container spacing={1}>
                <Grid size={4}>
                    <BasicCard title="Total Payment" number="20"/>
                </Grid>
                <Grid size={4}>
                    <BasicCard title="Total Income" number="2"/>
                </Grid>
                <Grid size={4}>
                    <BasicCard title="Total Transfer" number="45"/>
                </Grid>

                <Grid size={12}>
                    <BasicTable />
                </Grid>

            </Grid>
        </PageContainer>
    )
}
