let expenses =[];
let totalAmount =0;

const categorySelectEle = document.getElementById("category-select");
const amountInputEle = document.getElementById("amount-input");
const dateInputEle = document.getElementById("date-input");
const addBtnEle = document.getElementById("add-btn");
const expenseTableBodyELe = document.getElementById("expense-table-body");
const totalAmountEle = document.getElementById("total-amount");

addBtnEle.addEventListener('click',function(){
    const category = categorySelectEle.value;
    const amount = Number(amountInputEle.value);
    const date = dateInputEle.value;

    if(category === ''){
        alert('please select a category');
        return;
    }
    if (isNaN(amount) || amount <=  0){
        alert('please enter a valid amount');
        return;
    }
    if(date === ''){
        alert('please select a date');
        return;
    }
    expenses.push({category,amount,date})
    totalAmount += amount;
    totalAmountEle.textContent = totalAmount;

    const newRow = expenseTableBodyELe.insertRow();
    const categoryCell = newRow.insertCell();
    const amountCell = newRow.insertCell();
    const dateCell = newRow.insertCell();
    const deleteCell = newRow.insertCell();

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.classList.add('delete-btn');
    deleteBtn.addEventListener('click',function(){
        expenses.splice(expenses.indexOf(expense),1);

        totalAmount -= expense.amount;
        totalAmountEle.textContent =  totalAmount;

        expenseTableBodyELe.removeChild(newRow);


    })
    const expense = expenses[expenses.length-1]
    categoryCell.textContent = expense.category;
    amountCell.textContent = expense.amount;
    dateCell.textContent = expense.date;
    deleteCell.appendChild(deleteBtn);

})
for(const exp of expenses){
    totalAmount += amount;
    totalAmountEle.textContent = totalAmount;

    const newRow = expenseTableBodyELe.insertRow();
    const categoryCell = newRow.insertCell();
    const amountCell = newRow.insertCell();
    const dateCell = newRow.insertCell();
    const deleteCell = newRow.insertCell();

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.classList.add('delete-btn');
    deleteBtn.addEventListener('click',function(){
        expenses.splice(expenses.indexOf(expense),1);

        totalAmount -= expense.amount;
        totalAmountEle.textContent =  totalAmount;

        expenseTableBodyELe.removeChild(newRow);


    })
    const expense = expenses[expenses.length-1]
    categoryCell.textContent = expense.category;
    amountCell.textContent = expense.amount;
    dateCell.textContent = expense.date;
    deleteCell.appendChild(deleteBtn);


}