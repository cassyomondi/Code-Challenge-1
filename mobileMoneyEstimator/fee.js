// Function is called so that user receives prompt and result is displayed on the webpage
function estimateTransactionFee ()
{
    // Prompts the user to enter the amount of money they wish to send.
    let amountInput = prompt("Unatuma Ngapi? (KES):");

    // Convert this input to a number.
    let amountToSend = Number(amountInput);

    if (isNaN(amountToSend) || amountToSend <= 0) {
        // If input is invalid, show error message on the webpage
        document.getElementById("output").innerHTML = `<p style="color: red;">Please enter a valid amount to send.</p>`;
        return;
    }

    // Calculate 1.5% of the amount to send
    let one_point_five_percent = 1.5 * amountToSend / 100;

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

    // Displays the transaction summary to the user on the webpage in a clear format.
    document.getElementById("output").innerHTML = `
        <h2>Sending KES ${amountToSend}:</h2>
        <ul>
            <li>Calculated Transaction Fee: KES ${transaction_fee.toFixed(2)}</li>
            <li><strong>Total amount to be debited:</strong> KES ${(amountToSend + transaction_fee).toFixed(2)}</li>
        </ul>
        <p>Send Money Securely!</p>
    `;
}
