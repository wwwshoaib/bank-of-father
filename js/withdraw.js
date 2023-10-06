
// add event handler 
document.getElementById('btn-withdraw').addEventListener('click', function(){
   
    //find the withdraw amount
    const withdrawInput = document.getElementById('input-withdraw');
    const withdrawAmountSting = withdrawInput.value;
    //converting withdraw sting to float
    const newWithdrawAmount = parseFloat(withdrawAmountSting);
    //clear the withdraw amount 
    withdrawInput.value = '';
    if (isNaN(newWithdrawAmount)) { //if newDeposit amount is not a gives an 'alert' named 'Input Number' and return
        alert('Input a number'); 
        return; // return to execute the codes more
      }

    // finding the balance amount 
    const balanceAmountElement = document.getElementById('balance-total');
    const balanceAmountString = balanceAmountElement.innerText;
    const balanceAmount = parseFloat(balanceAmountString);
    
    // finding existing withdraw 
    const totalWithdrawElement = document.getElementById('withdraw-total');
    const totalWithdrawString = totalWithdrawElement.innerText;
    const existingWithdraw =  parseFloat(totalWithdrawString);

    //check either balance is exist with client requirement i.e. what amount client want to withdraw
  
    if( newWithdrawAmount > balanceAmount) {
        alert('insufficient balance');
        return;
    }
  // updating withdraw after withdrawing 
    const currentWithdraw = existingWithdraw + newWithdrawAmount;
    totalWithdrawElement.innerText = currentWithdraw;
    

    // deducting withdraw from the existing balance

    

    const currentBalance = balanceAmount - newWithdrawAmount;
    balanceAmountElement.innerText = currentBalance;
    
})