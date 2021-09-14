import React from 'react'

const TransactionSelect = ({transactions, onTransactionSelect}) => {

    const handleChange = (event) => {
        const chosenTransaction = transactions[event.target.value]
        onTransactionSelect(chosenTransaction)
    }

    const transactionOptions = transactions.map((transaction, index) => {
        return <option value={index} key={index}>{transaction.date}</option>
    })

   

    return (
        <div>
            <div className="select">
                <label for="select">Quick view:</label>
                <select name="select" onChange={handleChange}>
                    <option>Select a date</option>
                    {transactionOptions}
                </select>

            </div>
            
        </div>
    )
}

export default TransactionSelect
