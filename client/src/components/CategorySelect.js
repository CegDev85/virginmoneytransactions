import React from 'react'
import { useState, useEffect } from 'react'
import CategoryDetail from '../components/CategoryDetail'



const CategorySelect = ({selectedCategory, setSelectedCategory, transactions}) => {

    const [transactionHistory, setTransactionHistory] = useState([])
    const [selectedYear, setSelectedYear] = useState("*select a year above*")


    useEffect(() => {
        searchTransactions()
    },[selectedCategory])
      

    const handleChange = function(event) {
            let chosenCategory = event.target.value;
            setSelectedCategory(chosenCategory)
        
    }


    const searchTransactions = () => {
        const foundTransactions = transactions.filter(transaction => transaction.category === selectedCategory)
        setTransactionHistory(foundTransactions)
    }

    const transactionTotal = () => {
        let totalTransaction = 0;
        for(let transaction of transactionHistory){
            totalTransaction += transaction.amount
        }
        return totalTransaction
    }

    const transactionMonthly = () => {
        let monthlyTotal = transactionTotal() / 12;
        return monthlyTotal.toFixed(2)
    }

    const handleYear = function(event) {
        let chosenYear = event.target.value;
        setSelectedYear(chosenYear)
    }

    const spendsForYear = () => {
        let yearTotal = 0;
        let numList = [];
        for(let transaction of transactionHistory){
            if(transaction.date.includes(selectedYear)){
                yearTotal += transaction.amount
                numList.push(yearTotal)
                yearTotal -= yearTotal
            }
        }
        return numList
    }

    const highestSpendForYear = () => {
        const spends = spendsForYear()
        const topSpend = spends.length === 0 ? 0 : Math.max(...spends)
        return topSpend.toFixed(2)
    }

    const lowestSpendForYear = () => {
        const spends = spendsForYear()
        const lowSpend = spends.length === 0 ? 0 : Math.min(...spends)
        return lowSpend.toFixed(2)
    }



    
    

    return (
        <div className="category-select">
            <form>
                <ul>
                    <li>
                    <h2>Statistics</h2>
                        <label for="category">Category:</label>
                        <select name="category" onChange={handleChange} required>
                            <option>Select a category</option>
                            <option>Groceries</option>
                            <option>My Monthly DD</option>
                            <option></option>
                        </select> 
                    </li>
                </ul>
            </form>
            <p>Total Spend for {selectedCategory}:</p><p>£{transactionTotal()}</p>
            <p>Your monthly average spend for {selectedCategory}:</p><p>£{transactionMonthly()}</p>
            <h2>History</h2>
            <CategoryDetail transactionHistory={transactionHistory}/>
            <br></br>
            <h2>Highest and Lowest</h2>
            <form>
                <ul>
                    <li>
                        <label for="Year">Year:</label>
                        <select name="year" onChange={handleYear} required>
                            <option>Select a Year</option>
                            <option>2020</option>
                            <option>2019</option>
                        </select>
                    </li>
                </ul>
            </form>
            <p>Your highest spend in {selectedYear} is £{highestSpendForYear()}</p>
            <p>Your lowest spend in {selectedYear} is £{lowestSpendForYear()}</p>


            
        </div>
    )
}

export default CategorySelect
