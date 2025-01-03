import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import {CategoryType} from "../Constants";
import {useContext} from "react";
import {TransactionContext} from "../contexts/TransactionContext";



export default function BasicSelect(props) {
    // const [data, setData] = React.useState(props.default);
    const { type, setType, category} = useContext(TransactionContext)
    const handleChange = (event) => {
        setType(event.target.value);
    };

    return (
        <Box sx={{ minWidth: 120 }}>
            <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">{props.title}</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={type || category}
                    label="Age"
                    onChange={handleChange}
                >
                    {
                        props.data.map((item, index) => {
                            return <MenuItem key={index} value={item}>{item}</MenuItem>
                        })
                    }
                </Select>
            </FormControl>
        </Box>
    );
}
