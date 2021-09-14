import React from 'react'


const CategoryDetail = ({transactionHistory}) => {




    return (
        <div className="category-detail" >
            <ul>
                {transactionHistory.map(transaction => {
                    return(
                        <div className="category-list" key="key">
                        <li index="index" key="key">
                         <p>Date: {transaction.date}</p>
                         <p>Vendor: {transaction.vendor}</p>
                         <p>Type: {transaction.type}</p>
                         <p>Amount: £{transaction.amount.toFixed(2)}</p>
                         <p>Category: {transaction.category}</p>
                         <br></br>
                         </li>
                         </div>
                        
                    )
                })}
            </ul>
            
        </div>
    )
}

export default CategoryDetail
