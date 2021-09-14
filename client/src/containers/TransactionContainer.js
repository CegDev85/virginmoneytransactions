import React from 'react'
import { useState, useEffect } from 'react'
import TransactionDetail from '../components/TransactionDetail'
import TransactionSelect from '../components/TransactionSelect'
import CategorySelect from '../components/CategorySelect'

const TransactionContainer = () => {

    const [transactions, setTransactions] = useState([]);
    const [selectedTransaction, setSelectedtransaction] = useState(null);
    const [selectedCategory, setSelectedCategory] = useState("*select a category above*")


    useEffect(() => {
        getTransactions()
    },[])

    const getTransactions = () => {
        fetch('http://localhost:5000/api/transactions')
        .then(response => response.json())
        .then(transactions => setTransactions(transactions))
    }

    const onTransactionSelect = (transaction) => {
        setSelectedtransaction(transaction)
    }



  

    return (
        <div className="transaction-container">
            <h2>Welcome to your Virgin Money transactions</h2>
           <TransactionSelect  transactions={transactions} onTransactionSelect={onTransactionSelect} />
           {selectedTransaction ? <TransactionDetail transaction={selectedTransaction}/> : null }
        <br></br>
        <CategorySelect  transactions={transactions} selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory}/>
        </div>
    )
}

export default TransactionContainer
