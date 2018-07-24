enterExpenseButton = document.querySelector('#enterExpense');

enterExpenseButton.onclick = function() {
    expenseType = document.querySelector('form #expenseType').value;
    expenseAmount = document.querySelector('form #expenseAmount').value;
    newAmount = Number(localStorage.getItem(expenseType)) + Number(expenseAmount);
    localStorage.setItem(expenseType, newAmount);
    
    enterExpenseButton.click()

    /*
    if (getTotalUsed() != 0) {
        if (localStorage.getItem('budgetItemCar') != 0) {
            percentage = String(localStorage.getItem('budgetItemCar')/getTotalUsed() * 100) + "%"
            document.querySelector('.progressBar #car').style.width = percentage;
            console.log(getTotalUsed());
        }
    }
    */
}

var getTotalUsed = function () {
    return (localStorage.getItem('totalBudget') - localStorage.getItem('budgetItemCar') - 
    localStorage.getItem('budgetItemHouse')- localStorage.getItem('budgetItemApartment')- localStorage.getItem('budgetItemPersonal') -
    - localStorage.getItem('budgetItemClothes')- localStorage.getItem('budgetItemFood')- localStorage.getItem('budgetItemSports'))
}
