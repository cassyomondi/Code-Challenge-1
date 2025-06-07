// Function is called so that user receives prompt
estimateTransactionFee();


function estimateTransactionFee ()
{
    // Prompts the user to enter the amount of money they wish to send. 
    let amountInput = prompt("Unatuma Ngapi? (KES):");

    // Convert this input to a number.
    let amountToSend = Number(amountInput);

    // Calculate 1.5% of the amount to send
    let one_point_five_percent = 1.5 * amountToSend / 100

    let transaction_fee;

    // Calculates the transaction fee based on the 1.5% rule, ensuring it adheres to the minimum (KES 10) and maximum (KES 70) fee limits.
    if (one_point_five_percent < 10) 
    {
        transaction_fee = 10;
    }

    else if (one_point_five_percent > 70) 
    {
        transaction_fee = 70;
    }

    else if (one_point_five_percent > 10 && one_point_five_percent < 70)
    {
        transaction_fee = one_point_five_percent;
    }

    console.log ( `Sending KES ${amountToSend}:
Calculated Transaction Fee: KES ${transaction_fee}
Total amount to be debited: KES ${amountToSend + transaction_fee}

Send Money Securely!`);

}