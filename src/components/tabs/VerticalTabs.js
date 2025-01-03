import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { useMediaQuery } from '@mui/material';
import CustomizeCategory from "../customize-page/CustomizeCategory";
import Grid from "@mui/material/Grid";
import CustomizeCashFlow from "../customize-page/CustomizeCashFlow";
import CustomizeCreditCard from "../customize-page/CustomizeCreditCard";
import CustomizeMoneyLending from "../customize-page/CustomizeMoneyLending";
import CustomizeBankAccount from "../customize-page/CustomizeBankAccount";
import CustomizeGoals from "../customize-page/CustomizeGoals";

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`vertical-tabpanel-${index}`}
            aria-labelledby={`vertical-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
        id: `vertical-tab-${index}`,
        'aria-controls': `vertical-tabpanel-${index}`,
    };
}

export default function VerticalTabs({ onTabClicked }) {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    // Use the useMediaQuery hook to detect screen size
    const isSmallScreen = useMediaQuery('(max-width:600px)');

    return (
        <Box
            sx={{
                flexGrow: 1,
                bgcolor: '#423f3f',
                display: 'flex',
                flexDirection: isSmallScreen ? 'column' : 'row',
                minHeight: '100vh',
                height: 'auto',
                borderRadius: '10px',
            }}
        >
            <Tabs
                orientation={isSmallScreen ? 'horizontal' : 'vertical'}
                variant="scrollable"
                value={value}
                onChange={handleChange}
                aria-label="Responsive tabs example"
                scrollButtons={false}
                sx={{
                    borderRight: isSmallScreen ? 'none' : 1,
                    borderBottom: isSmallScreen ? 1 : 'none',
                    borderColor: 'divider',
                    backgroundColor: '#2b2929',
                    borderTopLeftRadius: isSmallScreen ? 0 : '10px',
                    borderTopRightRadius: isSmallScreen ? '10px' : 0,
                    borderBottomLeftRadius: isSmallScreen ? 0 : '10px',
                }}
            >
                <Tab label="Category" {...a11yProps(0)} onClick={() => onTabClicked(value)} />
                <Tab label="Cash Flow" {...a11yProps(1)} onClick={() => onTabClicked(value)} />
                <Tab label="Credit Card" {...a11yProps(2)} onClick={() => onTabClicked(value)} />
                <Tab label="Money Lending" {...a11yProps(3)} onClick={() => onTabClicked(value)} />
                <Tab label="Bank Account" {...a11yProps(4)} onClick={() => onTabClicked(value)}/>
                <Tab label="Goals" {...a11yProps(5)} onClick={() => onTabClicked(value)}/>
            </Tabs>
            <Grid container spacing={1}>
                <Grid item xs={12} sm={12} >
                    <TabPanel value={value} index={0}>
                        <CustomizeCategory/>
                    </TabPanel>
                    <TabPanel value={value} index={1}>
                        <CustomizeCashFlow/>
                    </TabPanel>
                    <TabPanel value={value} index={2}>
                        <CustomizeCreditCard/>
                    </TabPanel>
                    <TabPanel value={value} index={3}>
                        <CustomizeMoneyLending/>
                    </TabPanel>
                    <TabPanel value={value} index={4}>
                        <CustomizeBankAccount/>
                    </TabPanel>
                    <TabPanel value={value} index={5}>
                        <CustomizeGoals/>
                    </TabPanel>
                </Grid>
            </Grid>
            {/*<TabPanel value={value} index={6}>*/}
            {/*    Item Seven*/}
            {/*</TabPanel>*/}
        </Box>
    );
}
