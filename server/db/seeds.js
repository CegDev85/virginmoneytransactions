use transaction_list;
db.dropDatabase();

db.transactions.insertMany([
    {
       date: "01/11/2020",
       vendor: "Morrisons",
       type: "Card",
       amount: 10.40,
       category: "Groceries"
    },{
        date: "28/10/2020",
        vendor: "CYBG",
        type: "Direct Debit",
        amount: 600.00,
        category: "My Monthly DD"
    },{
        date: "28/10/2020",
        vendor: "Pure Gym",
        type: "Direct Debit",
        amount: 40.00,
        category: "My Monthly DD"
    },{
        date: "01/10/2020",
        vendor: "M&S",
        type: "Card",
        amount: 5.99,
        category: "Groceries"
    },{
        date: "30/09/2020",
        vendor: "McMillan",
        type: "Internet",
        amount: 10.00,
        category: ""
    },{
        date: "01/11/2019",
        vendor: "Morrisons",
        type: "Card",
        amount: 20.00,
        category: "Groceries"
    }
])