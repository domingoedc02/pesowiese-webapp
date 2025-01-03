import {useContext} from "react";
import {TransactionContext} from "./contexts/TransactionContext";


export const CategoryType = ["INCOME", "PAYMENT", "TRANSFER"]

export const FilterCategory = (type, arr, propertyName) => {

    const filteredData = []
    arr.forEach(item => {
        if (item[propertyName] === type) filteredData.push(item.name)
    })
    return filteredData
}

export const FilteredPayment = (type, arr, propertyName) => {
    const { subcategory } = useContext(TransactionContext)
    const filteredData = []
    if (type === "INCOME"){
        if (propertyName === "receiver"){
            arr.forEach(item => {
                console.log(item.name)
                if (item.type !== "Credit Card") filteredData.push(item.name)
            })
        }
    } else if (type === "PAYMENT") {
        if (propertyName === "payment"){
            arr.forEach(item => {
                 filteredData.push(item.name)
            })
        }
    } else if (type === "TRANSFER"){
        if (propertyName === "payment"){
            arr.forEach(item => {
                if (item.type !== "Credit Card")filteredData.push(item.name)
            })
        } else if (propertyName === "receiver"){
            if (subcategory !== "to others"){
                arr.forEach(item => {
                    if (item.type !== "Credit Card")filteredData.push(item.name)
                })
            } else {
                DefaultReceiverArray.forEach(item => {
                    filteredData.push(item)
                })
            }
        }
    }
    return filteredData

}

export const DefaultReceiverArray = ["Others", "Lender Name"]

export const formatNumber = (number) => {
    return new Intl.NumberFormat('en-US', { minimumFractionDigits: 0, maximumFractionDigits: 20 }).format(number);
}

export const CurrentDate = () => {
    const currentDate = new Date();
    // Format the date
    const formattedDate = new Intl.DateTimeFormat('en-US', {
        year: 'numeric',
        month: 'long', // Short month format (e.g., "Dec")
        day: 'numeric',
    }).format(currentDate);

// Rearrange the format to "YYYY MMM DD"
    const [month, day, year] = formattedDate.split(' '); // Split the formatted string
    return `${year} ${month} ${day}`.replace(",", "");
}
