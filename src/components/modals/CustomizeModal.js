import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import CloseIcon from '@mui/icons-material/Close';
import CashFlowView from "../customize-page/component/CashFlowView";
import CreditCardView from "../customize-page/component/CreditCardView";

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    minWidth: 350,
    maxWidth: 500,
    height: 'auto',
    boxShadow: 24,
    p: 4,
    backgroundColor: '#2b2929',
    borderRadius: '10px'
};

export default function CustomizeModal({ isModalOpen, onClose, title, data }) {
    const returnBody = () => {
        if (title === ("Cash Flow")) return <CashFlowView/>
        else if (title === "Credit Card") return <CreditCardView data={data}/>
    }
    return (
        <Modal
            open={isModalOpen}
            onClose={onClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={style}>
                <Button sx={{ float: 'right' }} onClick={onClose}>
                    <CloseIcon />
                </Button>
                <Typography id="modal-modal-title" variant="h6" component="h2">
                    {title}
                </Typography>
                <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                    {returnBody()}
                </Typography>
            </Box>
        </Modal>
    );
}
