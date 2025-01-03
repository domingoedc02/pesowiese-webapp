

// Context.js
import React, { createContext, useState } from 'react';

const TransactionContext = createContext();

const TransactionProvider = (
        {   children,
            defaultType = "",
            defaultDate = new Date(),
            defaultCategory = "",
            defaultSubcategory = "" ,
            defaultPaymentMethod = "",
            defaultAmount = "",
            defaultReceiver = "",
            defaultReceipt = ""
        }
    ) => {
    const [type, setType] = useState(defaultType); // Use props.default from BasicSelect
    const [date, setDate] = useState(defaultDate)
    const [category, setCategory] = useState(defaultCategory)
    const [subcategory, setSubcategory] = useState(defaultSubcategory)
    const [paymentMethod, setPaymentMethod] = useState(defaultPaymentMethod)
    const [amount, setAmount] = useState(defaultAmount)
    const [receiver, setReceiver] = useState(defaultReceiver)
    const [receipt, setReceipt] = useState(defaultReceipt)

    return (
        <TransactionContext.Provider value={
            {
                type, setType,
                date, setDate,
                category, setCategory,
                subcategory, setSubcategory,
                paymentMethod, setPaymentMethod,
                amount, setAmount,
                receiver, setReceiver,
                receipt, setReceipt
            }
        }>
            {children}
        </TransactionContext.Provider>
    );
};

export { TransactionContext, TransactionProvider };
