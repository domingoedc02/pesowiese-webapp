import React, { useEffect, useState } from 'react';
import "../../scss/customize-page/CustomizeCategory.scss";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import CloseIcon from '@mui/icons-material/Close';
import EditIcon from '@mui/icons-material/Edit';
import SubcategoriesBody from "../SubcategoriesBody";
import SubcategoriesList from "./component/SubcategoriesList";

export default function CustomizeCategory() {

    const initialSample = [
        {
            name: "utilities",
            selected: false,
            gridSize: 4,
            order: 1
        },
        {
            name: "grocery",
            selected: false,
            gridSize: 4,
            order: 2
        },
        {
            name: "shopping",
            selected: false,
            gridSize: 4,
            order: 3
        },
    ];

    const [data, setData] = useState(initialSample);
    const [gridSize, setGridSize] = useState(12);
    const [selectedValue, setSelectedValue] = useState(null);
    const [showSubcategory, setShowSubcategory] = useState(false)

    const handleCategoryClick = (name) => {
        setShowSubcategory(false)
        setData((prev) => {
            let orderCounter = 2;
            return prev.map((item) => {
                if (item.name === name) {
                    return { ...item, selected: true, gridSize: 12, order: 1 };
                } else {
                    return { ...item, selected: false, gridSize: 6, order: orderCounter++ };
                }
            });
        });
        if (selectedValue !== null){
            setTimeout(() => {
                setShowSubcategory(true)
            }, 300)
        } else {
            setShowSubcategory(true)
        }
        setSelectedValue(name);
        setGridSize(name ? 6 : 12);
    };

    const subcategoryCloseHandler = () => {
        setData((prev) => {
            let orderCounter = 1;
            return prev.map((item) => {
                return { ...item, selected: false, gridSize: 4, order: orderCounter++ };
            });
        });
        setShowSubcategory(false)
        setGridSize(12)
    }

    useEffect(() => {
        console.log("Updated State:", data);
    }, [data]);

    return (
        <Box>
            <Grid container spacing={1}>
                <Grid item xs={12}>
                    <div className="customize-category-header">
                        <h2>Category</h2>
                        <Button className="new-category-button">
                            New Category
                        </Button>
                    </div>
                </Grid>
                <Grid item xs={gridSize}>
                    <Grid container spacing={1}>
                        {data.map((category) => (
                            <Grid item xs={12} sm={category.gridSize} order={{xs: category.order, sm: category.order}} key={category.name}>
                                <div
                                    className={`category-card ${
                                        category.selected ? "selected" : ""
                                    }`}
                                    onClick={() => handleCategoryClick(category.name)}
                                >
                                    <h4>{category.name.charAt(0).toUpperCase() + category.name.slice(1)}</h4>
                                    <h5>P 5,000</h5>
                                </div>
                            </Grid>
                        ))}
                    </Grid>
                </Grid>
                <Grid
                    item
                    xs={6}
                    sm={6}
                    className={`subcategory ${showSubcategory ? "show" : "not-show"}`}
                >
                    <div className="header">
                        <button>
                            <EditIcon/>
                        </button>
                        <button onClick={subcategoryCloseHandler}>
                            <CloseIcon/>
                        </button>
                    </div>
                    <div className="name">
                        <h3>{selectedValue} </h3>
                    </div>
                    <div>
                        <SubcategoriesList/>
                    </div>
                </Grid>
            </Grid>
        </Box>
    );
}
