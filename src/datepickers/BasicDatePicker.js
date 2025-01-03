import * as React from 'react';
import {useContext, useState} from 'react';
import {AdapterDayjs} from '@mui/x-date-pickers/AdapterDayjs';
import {LocalizationProvider} from '@mui/x-date-pickers/LocalizationProvider';
import {DatePicker} from '@mui/x-date-pickers/DatePicker';
import {TransactionContext} from "../contexts/TransactionContext";
import dayjs from 'dayjs';
import {styled} from "@mui/material/styles";


const StyledDatePicker = styled(DatePicker)(({ theme }) => ({
    width: '100%',
}));


export default function BasicDatePicker(props) {
    const { date, setDate } = useContext(TransactionContext)

    return (
        <LocalizationProvider dateAdapter={AdapterDayjs} >
            <StyledDatePicker
                label={props.title}
                value={dayjs(date)}
                onChange={(newValue) => {
                    if (newValue && newValue.$d) {
                        setDate(newValue.$d);
                    } else {
                        setDate(null);
                    }
                }}
            />
        </LocalizationProvider>
    );
}
