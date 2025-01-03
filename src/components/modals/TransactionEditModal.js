import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import EditIcon from '@mui/icons-material/Edit';
import {TransactionContext} from "../../contexts/TransactionContext";
import {useContext} from "react";
import {FilterCategory, FilteredPayment} from "../../Constants";

import EditTransactionForm from "../forms/EditTransactionForm";

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

export default function BasicModal(props) {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const {type, subcategory, category} = useContext(TransactionContext)

    const categories = FilterCategory(type, props.categories, "type")
    const subcategories = FilterCategory(category, props.subcategories, "category")
    const paymentMethods = FilteredPayment(type, props.paymentMethods, "payment")
    const receivers = () => {
        if (subcategory === "to others") return FilteredPayment(type, props.lenders, "receiver")
        else return FilteredPayment(type, props.paymentMethods, "receiver")
    }
    console.log(receivers())
    return (
        <div>
            <Button variant="text" onClick={handleOpen}><EditIcon/></Button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <EditTransactionForm
                        categories={categories}
                        subcategories={subcategories}
                        paymentMethods={paymentMethods}
                        receivers={receivers()}
                    />

                </Box>
            </Modal>
        </div>
    );
}


