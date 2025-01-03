import { useState } from "react";
import { Input, InputAdornment } from "@mui/material";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";

export default function SubcategoriesList() {
    const initialData = [
        { name: "Electricity", budget: "1,000" },
        { name: "Water", budget: "1,000" },
        { name: "Others", budget: "1,000" },
    ];

    // State to track edit mode and budget input value
    const [editMode, setEditMode] = useState({});
    const [budgetInput, setBudgetInput] = useState({});

    // Toggle edit mode for a specific item
    const handleEditClick = (name) => {
        setEditMode((prevState) => ({
            ...prevState,
            [name]: !prevState[name], // Toggle edit mode for the item
        }));
    };

    // Handle the change in the input field
    const handleBudgetChange = (event, name) => {
        const { value } = event.target;
        setBudgetInput((prevState) => ({
            ...prevState,
            [name]: value, // Update the budget input value for the specific item
        }));
    };

    // Save the new budget value and toggle back to display mode
    const handleSaveBudget = (name) => {
        const updatedData = [...initialData];
        const index = updatedData.findIndex((item) => item.name === name);
        if (index !== -1) {
            updatedData[index].budget = budgetInput[name]; // Update the budget value in data
        }
        // Update the state with the new budget value
        setEditMode((prevState) => ({
            ...prevState,
            [name]: false, // Toggle back to display mode
        }));
    };

    return (
        <div>
            {initialData.map((item) => {
                return (
                    <div
                        key={item.name}
                        style={{ backgroundColor: "#3a3838", padding: "10px", borderRadius: "10px", margin: '5px' }}
                    >
                        <div style={{ float: "right" }}>
                            {editMode[item.name] ? (
                                <button
                                    style={{ margin: "0 px", padding: "0 5px" }}
                                    onClick={() => handleSaveBudget(item.name)}
                                >
                                    Save
                                </button>
                            ) : (
                                <button
                                    style={{ margin: "0 px", padding: "0 5px" }}
                                    onClick={() => handleEditClick(item.name)}
                                >
                                    Edit
                                </button>
                            )}
                        </div>
                        <h4 style={{ margin: 0, padding: 0 }}>{item.name}</h4>
                        {editMode[item.name] ? (
                            <FormControl fullWidth sx={{ m: 1 }} variant="standard">
                                <InputLabel htmlFor={`standard-adornment-amount-${item.name}`}>
                                    Amount
                                </InputLabel>
                                <Input
                                    id={`standard-adornment-amount-${item.name}`}
                                    value={budgetInput[item.name] || item.budget} // Show current input or default budget
                                    onChange={(e) => handleBudgetChange(e, item.name)} // Handle input change
                                    startAdornment={<InputAdornment position="start">$</InputAdornment>}
                                />
                            </FormControl>
                        ) : (
                            <h5 style={{ margin: 0, padding: 0 }}>
                                Budget: P {item.budget}
                            </h5>
                        )}
                    </div>
                );
            })}
        </div>
    );
}
