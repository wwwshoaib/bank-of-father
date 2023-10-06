

// step-1 add event listener to the deposit button

document.getElementById('btn-deposit').addEventListener('click', function(){

    

   
    // get the deposit amount from the deposit input field
    const depositInput = document.getElementById('input-deposit');
    const newDepositAmountString = depositInput.value;
    // 2-5-convert string deposit amount into a number
    const newDepositAmount = parseFloat(newDepositAmountString);
    // 3-clear the deposit input field after getting the value
    depositInput.value = '';  

    if (isNaN(newDepositAmount)) { //if newDeposit amount is not a gives an 'alert' named 'Input Number' and return
        alert('Input a number'); 
        return; // return to execute the codes more
      }
   
    
  
    //4- get the previous/existing deposit total
    const existingDepositElement = document.getElementById('deposit-total');
    const previousAmountString = existingDepositElement.innerText;


    const previousAmount = parseFloat(previousAmountString );
    

    // step-5: calculate new deposit total and set the value to the deposit total

    const depositTotal = newDepositAmount + previousAmount ;
    
    existingDepositElement.innerText = depositTotal;

  

    //step-6: finding existing balance
    const existingBalanceElement = document.getElementById('balance-total');
    const existingBalanceAmountString = existingBalanceElement.innerText;
    const existingBalance = parseFloat(existingBalanceAmountString);
    
    //step-7: updating balance by adding new balance to the existing balance
    const currentBalanceAfterDeposit = existingBalance + newDepositAmount;
    existingBalanceElement.innerText = currentBalanceAfterDeposit; 
   

    
})
