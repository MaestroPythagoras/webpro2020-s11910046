// Tahap #1
const account = { 
    name: 'user',
    expenses: [],

// Tahap #2
    addExpense(description, amount) {
        account.expenses.push({
            description: description,
            amount: amount
        });
    },

// Tahap #3
    getAccountSummary() {
        return account.expenses.reduce((result, expense) 
        => result + expense.amount, 0)
    }
}

// Tahap #4
account.addExpense('Beli Buku', 5000);
account.addExpense('Beli Pulpen', 2000);
account.addExpense('Beli Pensil', 1000);
account.addExpense('Beli Spidol', 3000);
console.log(account.getAccountSummary()); 
//Output = 11000