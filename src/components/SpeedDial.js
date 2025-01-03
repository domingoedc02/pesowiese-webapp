import * as React from 'react';
import Box from '@mui/material/Box';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import PaymentsIcon from '@mui/icons-material/Payments';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import MoveUpIcon from '@mui/icons-material/MoveUp';

const actions = [
    { icon: <PaymentsIcon/>, name: 'Payment' },
    { icon: <AccountBalanceWalletIcon/>, name: 'Income' },
    { icon: <MoveUpIcon/>, name: 'Transfer' },
];

export default function AddTransaction() {
    return (
        <Box sx={{ height: 320, transform: 'translateZ(0px)', flexGrow: 1, position: 'fixed', bottom: '20px', right: '20px' }}>
            <SpeedDial
                ariaLabel="SpeedDial basic example"
                sx={{ position: 'absolute', bottom: 16, right: 16 }}
                icon={<SpeedDialIcon />}
            >
                {actions.map((action) => (
                    <SpeedDialAction
                        key={action.name}
                        icon={action.icon}
                        tooltipTitle={action.name}
                        onClick={() => console.log(action.name)}
                    />
                ))}
            </SpeedDial>
        </Box>
    );
}
