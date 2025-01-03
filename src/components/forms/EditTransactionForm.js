import Grid from "@mui/material/Grid2";
import BasicDatePicker from "../../datepickers/BasicDatePicker";
import BasicSelect from "../../selects/BasicSelect";
import {CategoryType, DefaultArray, formatNumber} from "../../Constants";
import * as React from "react";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import Box from "@mui/material/Box";
import {useContext, useEffect, useState} from "react";
import {TransactionContext} from "../../contexts/TransactionContext";
import {Button, Checkbox, FormControlLabel, FormGroup, Input, InputAdornment, TextField} from "@mui/material";
import {styled} from "@mui/material/styles";

const StyledTextField = styled(TextField)(({ theme }) => ({
    width: '100%',
    '& .MuiOutlinedInput-root': {
        '& .MuiOutlinedInput-input': {
            '&::-webkit-outer-spin-button, &::-webkit-inner-spin-button': {
                '-webkit-appearance': 'none',
                margin: 0,
            },
            '&[type=number]': {
                MozAppearance: 'textfield',
                appearance: 'textfield',
            },
        },
    },
}));


export default function EditTransactionForm(props){
    const { type, setType, category, setCategory, subcategory, setSubcategory, paymentMethod, setPaymentMethod, receiver, setReceiver, amount, setAmount } = useContext(TransactionContext)
    const [isSomeoneLend, setIsSomeoneLend] = useState(false)
    const [lenderName, setLenderName] = useState("")
    const [receiptValue, setReceiptValue] = useState(null)
    const [editAmount, setEditAmount] = useState(null)

    useEffect(() => {
        if (amount !== null || amount !== ""){
            const replace = amount.replace(/,/g, "");
            setEditAmount(Number(replace))
        }
    }, [amount]);

    const amountHandler = (value) => {
        setAmount(formatNumber(value))
    }

    const isSomeoneLendForm = () => {
        if (isSomeoneLend && subcategory === "to others"){
            return (
                <Grid size={12} container spaicing={1}>
                    <Grid size={12}>
                        <StyledTextField id="name" label="Name" variant="outlined" type={"text"} value={lenderName} onChange={e => setLenderName(e.target.value)}/>
                    </Grid>
                    <Grid size={12}>
                        <StyledTextField id="email" label="Email ( Optional )" placeholder="Optional" variant="outlined" type={"email"}/>
                    </Grid>
                </Grid>
            )
        } else return ""
    }
    console.log(props)
    return (
        <Grid container size={12} spacing={1}>
            <Grid size={12}>
                <h3 style={{textAlign: 'center'}}>Edit Transaction</h3>
            </Grid>
            <Grid size={12}>
                <BasicDatePicker title="Transaction Date"/>
            </Grid>
            <Grid size={12}>
                <Box sx={{ minWidth: 120 }}>
                <FormControl fullWidth>
                    <InputLabel id="type">Type</InputLabel>
                    <Select
                        labelId="type"
                        id="type"
                        value={type}
                        label="Type"
                        onChange={e => setType(e.target.value)}
                    >
                        {
                            CategoryType.map((item, index) => {
                                return <MenuItem key={index} value={item}>{item}</MenuItem>
                            })
                        }
                    </Select>
                </FormControl>
            </Box>
            </Grid>
            <Grid size={6}>
                <Box sx={{ minWidth: 120 }}>
                    <FormControl fullWidth>
                        <InputLabel id="category">Category</InputLabel>
                        <Select
                            labelId="category"
                            id="category"
                            value={category}
                            label="Category"
                            onChange={e => setCategory(e.target.value)}
                        >
                            {
                                props.categories.map((item, index) => {
                                    return <MenuItem key={index} value={item}>{item}</MenuItem>
                                })
                            }
                        </Select>
                    </FormControl>
                </Box>
            </Grid>
            <Grid size={6}>
                <Box sx={{ minWidth: 120 }}>
                    <FormControl fullWidth>
                        <InputLabel id="subcategory">Subcategory</InputLabel>
                        <Select
                            labelId="subcategory"
                            id="subcategory"
                            value={subcategory}
                            label="Subcategory"
                            onChange={e => setSubcategory(e.target.value)}
                        >
                            {
                                props.subcategories.map((item, index) => {
                                    return <MenuItem key={index} value={item}>{item}</MenuItem>
                                })
                            }
                        </Select>
                    </FormControl>
                </Box>
            </Grid>
            {(type === "TRANSFER" && subcategory === "to others")?
                <FormGroup>
                    <FormControlLabel control={<Checkbox value={isSomeoneLend} onChange={e => setIsSomeoneLend(e.target.checked)}/>} label="Did someone borrow money from you, and do you want to remind them through email?" />
                </FormGroup>
                : ""}
            {isSomeoneLendForm()}
            <Grid size={12}>
                <FormControl fullWidth sx={{ m: 1 }} variant="standard">
                    <InputLabel htmlFor="standard-adornment-amount">Amount</InputLabel>
                    <Input
                        id="standard-adornment-amount"
                        startAdornment={<InputAdornment position="start">₱</InputAdornment>}
                        type="number"
                        value={editAmount}
                        onChange={e => amountHandler(e.target.value)}
                    />
                </FormControl>
            </Grid>
            <Grid size={6}>
                <Box sx={{ minWidth: 120 }}>
                    <FormControl fullWidth>
                        <InputLabel id="paymentMethod">Payment Method</InputLabel>
                        <Select
                            labelId="paymentMethod"
                            id="paymentMethod"
                            value={paymentMethod}
                            label="Payment Method"
                            onChange={e => setPaymentMethod(e.target.value)}
                        >
                            {
                                props.paymentMethods.map((item, index) => {
                                    return <MenuItem key={index} value={item}>{item}</MenuItem>
                                })
                            }
                        </Select>
                    </FormControl>
                </Box>
            </Grid>
            <Grid size={6}>
                <Box sx={{ minWidth: 120 }}>
                    <FormControl fullWidth>
                        <InputLabel id="receiver">Receiver</InputLabel>
                        <Select
                            labelId="Receiver"
                            id="receiver"
                            value={receiver}
                            label="Receiver"
                            onChange={e => setReceiver(e.target.value)}
                        >
                            {
                                props.receivers.map((item, index) => {
                                    if (item === "Lender Name" && lenderName !== "" && isSomeoneLend) return <MenuItem key={index} value={lenderName}>{lenderName}</MenuItem>
                                    else if (item !== "Lender Name" && !isSomeoneLend) return <MenuItem key={index} value={item}>{item}</MenuItem>
                                    else if (subcategory !== "to others") return <MenuItem key={index} value={item}>{item}</MenuItem>
                                })
                            }
                        </Select>
                    </FormControl>
                </Box>
            </Grid>
            <Grid size={12}>
                <Box>
                    <FormControl fullWidth sx={{ m: 1 }} variant="standard">
                        <InputLabel htmlFor="standard-adornment-amount">Receipt</InputLabel>
                        <Input
                            id="standard-adornment-amount"
                            startAdornment={<InputAdornment position="start"> </InputAdornment>}
                            type="file"
                        />
                    </FormControl>
                </Box>
            </Grid>
            <Grid size={6}>
                <Button style={{display: 'block', margin: '5px auto'}}>Cancel</Button>
            </Grid>
            <Grid size={6}>
                <Button color="success" variant="contained" style={{display: 'block', margin: '5px auto'}}>Save</Button>
            </Grid>
        </Grid>
    )
}


