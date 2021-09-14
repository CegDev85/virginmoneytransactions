import React from 'react'



const TransactionDetail = ({transaction}) => {
    return (
        <div className="transaction-detail">
            <div className="transaction-list">
            <h3>Date: {transaction.date}</h3>
            <h3>Vendor: {transaction.vendor}</h3>
            <h3>Type: {transaction.type}</h3>
            <h3>Amount: £{transaction.amount.toFixed(2)}</h3>
            <h3>Category: {transaction.category}</h3>
            </div>
        </div>
    )
}

export default TransactionDetail
