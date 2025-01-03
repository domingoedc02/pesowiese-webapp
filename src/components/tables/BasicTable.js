import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import {Chip, Link} from "@mui/material";
import TransactionEditModal from "../modals/TransactionEditModal";
import {TransactionProvider} from "../../contexts/TransactionContext";

const categories = [
    {
        name: "Salary",
        type: "INCOME"
    },
    {
        name: "Utilities",
        type: "PAYMENT"
    },
    {
        name: "Mortgage",
        type: "PAYMENT"
    },
    {
        name: "Bank Transfer",
        type: "TRANSFER"
    },
]

const paymentMethods = [
    {
        name: "BPI Payroll",
        type: "Bank"
    },
    {
        name: "UNIONBANK CREDITCARD",
        type: "Credit Card"
    },
    {
        name: "Maya Credit",
        type: "Credit Card"
    },
    {
        name: "Gcash",
        type: "Digital Wallet"
    },
]

const subcategories = [
    {
        name: "IBM Solutions Delivery Inc",
        category: "Salary"
    },
    {
        name: "Electricity",
        category: "Utilities"
    },
    {
        name: "Water",
        category: "Utilities"
    },
    {
        name: "to me",
        category: "Bank Transfer"
    },
    {
        name: "to others",
        category: "Bank Transfer"
    },
]

const lenders = [
    {
        name: "Tita Lorie",
        email: "loriecruz@email.com"
    },
    {
        name: "Precious Magat",
        email: "preciousmagat@email.com"
    },

]

const columns = [
    {
        field: 'date',
        headerName: 'Date',
        width: 200,
        type: 'date'
    },
    {
        field: 'id',
        headerName: 'Transaction ID',
        width: 300,
    },
    {
        field: 'type',
        headerName: 'Type',
        width: 150,
        editable: false,
    },
    {
        field: 'category',
        headerName: 'Category',
        width: 250,
        editable: false,
        valueGetter: (value, row) => `${row.category || ''} - ${row.subcategory || ''}`,
    },
    {
        field: 'paymentMethod',
        headerName: 'Payment Method',
        width: 200,
        editable: false,
        renderCell: (param) => {
            if (param.value !== undefined){
                return <Chip label={param.value} variant="outlined" />
            }
        }
    },
    {
        field: 'amount',
        headerName: 'Amount',
        width: 200,
        editable: false,
    },
    {
        field: 'receiver',
        headerName: 'Receiver',
        width: 200,
        renderCell: (param) => {
            return <Chip label={param.value} variant="outlined" />
        }
    },
    {
        field: 'receipt',
        headerName: 'Receipt',
        width: 150,
        renderCell: (params) => {
            if (params.value) {
                return (
                    <Link href={params.value} target="_blank" rel="noopener noreferrer">
                        View Receipt
                    </Link>
                );
            } else {
                return null;
            }
        }
    },
    {
        field: 'action',
        headerName: '',
        width: 100,
        renderCell: (param) => {
            return (
                <TransactionProvider
                    defaultType={param.row.type}
                    defaultDate={param.row.date}
                    defaultCategory={param.row.category}
                    defaultSubcategory={param.row.subcategory}
                    defaultReceiver={param.row.receiver}
                    defaultAmount={param.row.amount}
                >
                    <TransactionEditModal
                        data={param.row}
                        categories={categories}
                        subcategories={subcategories}
                        paymentMethods={paymentMethods}
                        lenders={lenders}
                    />
                </TransactionProvider>
            )
        }
    }
];
const today = new Date();

const rows = [
    {
        date: today,
        id: '19597cc8-2b62-4c4d-9b58-d692135b328d',
        type: 'INCOME',
        subcategory: 'IBM Solutions Delivery Inc',
        category: 'Salary',
        amount: '65,000',
        receiver: 'BPI Payroll',
        // receipt: 'https://facebook.com'
    },
    {
        date: today,
        id: '19597cc8-2b62-4c4d-9b58-d692135b328s',
        type: 'TRANSFER',
        category: 'Salary',
        subcategory: 'IBM Solutions Delivery Inc',
        amount: '65,000',
        receiver: 'BPI Payroll',
        paymentMethod: 'Maya'
        // receipt: 'https://facebook.com'
    }
];

export default function BasicTable() {



    return (
        <Box sx={{ height: 500, width: '100%' }}>
            <DataGrid
                rows={rows}
                columns={columns}
                initialState={{
                    pagination: {
                        paginationModel: {
                            pageSize: 10,
                        },
                    },
                }}
                enableColumnVisibility={false}
                pageSizeOptions={[5]}
                checkboxSelection={false}
                disableRowSelectionOnClick
            />
        </Box>
    );
}
