//Alert valid for both forms
const alertCtrl = document.querySelector('ion-alert-controller');
const finalBal = document.querySelector('#final-balance');

let finBal = 0;

//Income only, all the const we will use here pointing to every HTML ID code
const reasonInputIn = document.querySelector('#input-reason-in');
const amountInputIn = document.querySelector('#input-amount-in');
const incomesList = document.querySelector('#incomes-list');
const confirmBtnIn = document.querySelector('#btn-confirm-in');
const totalIncomesOutput = document.querySelector('#total-incomes');
const cancelBtnIn = document.querySelector('#btn-cancel-in');

let totalIncomes = 0;

//Expenses only, all the const we will use here pointing to every HTML ID code
const reasonInputOut = document.querySelector('#input-reason-out');
const amountInputOut = document.querySelector('#input-amount-out');
const confirmBtnOut = document.querySelector('#btn-confirm-out');
const expensesList = document.querySelector('#expenses-list');
const totalExpensesOutput = document.querySelector('#total-expenses');
const cancelBtnOut = document.querySelector('#btn-cancel-out');

let totalExpenses = 0;




//Function to clear Expenses values from form
const clearOut = () =>{
    reasonInputOut.value = '';
    amountInputOut.value = '';
}

//Function to clear Incomes values from form
const clearIn = () =>{
    reasonInputIn.value = '';
    amountInputIn.value = '';
}

//Listener when we make click on Expenses Confirm Button
confirmBtnOut.addEventListener('click', ()=>{
    const enteredReasonOut = reasonInputOut.value; // We create new const with the value of both fields
    const enteredAmountOut = amountInputOut.value; //

    if (
        enteredReasonOut.trim().length <=0 || //If values or length dont fit this condition
        enteredAmountOut <=0 || 
        enteredAmountOut.trim().length <=0
        ){
            alertCtrl.create({ //We create an alert asking for fill fields right
                    message: 'Por favor, introduce los datos de nuevo', 
                    header: 'Datos incorrectos',
                    buttons: ['Vale!']
                })
                    .then(alertElement => {
                    alertElement.present();
                });
            return;
        }
    
    //Once we enter right values, create an ion-item with the reason and amount
    const outItem = document.createElement('ion-item');  
    outItem.textContent = enteredReasonOut+ ': ' + enteredAmountOut + ' €';
    
    //and we add it to expensesList const, that is the one that points to out #expenses-list id on HTML code
    expensesList.appendChild(outItem);

    totalExpenses -= -enteredAmountOut;
    totalExpensesOutput.textContent = totalExpenses + ' €';

    if (totalIncomes > totalExpenses){
        finBal = totalIncomes - totalExpenses;
        finalBal.textContent = finBal + ' €';
    }else if(totalExpenses > totalIncomes){
        finBal = totalIncomes - totalExpenses;
        finalBal.textContent = finBal + ' €';
    }else{
        
    }

    //Call the function to clear fields at the end
    clearOut();
});

//Listener when we make click on Expenses Confirm Button
confirmBtnIn.addEventListener('click', ()=>{
    const enteredReasonIn = reasonInputIn.value; // New const with value of both fields
    const enteredAmountIn = amountInputIn.value; //

    if (
        enteredReasonIn.trim().length <=0 || //If values or length dont fit this condition
        enteredAmountIn <=0 || 
        enteredAmountIn.trim().length <=0
        ){
            alertCtrl.create({ //We create an alert asking for fill fields right
                    message: 'Por favor, introduce los datos de nuevo', 
                    header: 'Datos incorrectos',
                    buttons: ['Vale!']
                })
                    .then(alertElement => {
                    alertElement.present();
                });
            return;
        }
  
    //Once we enter right values, create an ion-item with the reason and amount
    const inItem = document.createElement('ion-item');   
    inItem.textContent = enteredReasonIn + ': ' + enteredAmountIn + ' €';

    //and we add it to incomesList const, that is the one that points to out #incomes-list id on HTML code
    incomesList.appendChild(inItem);

    totalIncomes += +enteredAmountIn;
    totalIncomesOutput.textContent = totalIncomes + ' €';

    if (totalIncomes > totalExpenses){
        finBal = totalIncomes - totalExpenses;
        finalBal.textContent = finBal + ' €';
    }else if(totalExpenses > totalIncomes){
        finBal = totalIncomes - totalExpenses;
        finalBal.textContent = finBal + ' €';
    }else{
        
    }

    clearIn();
});

// Functions to clear our fields data 
cancelBtnIn.addEventListener('click', clearIn);
cancelBtnOut.addEventListener('click', clearOut);

