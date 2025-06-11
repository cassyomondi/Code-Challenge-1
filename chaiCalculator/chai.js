// Function is called so that user receives prompt and result is displayed on the webpage
function calculateChaiIngredients()
{
    // The Standard Recipe for 1 Cup of Chai
    const water_required = 200;
    const milk_required = 50;
    const majani_required = 1;
    const sugar_required = 2;

    // Function prompts the user to enter the number of chai cups they want to make
    let cupsInput = prompt("Karibu! How many cups of Chai Bora would you like to make?");

    // Takes the numberOfCups (as a number) as an argument
    let numberOfCups = Number(cupsInput);

    if (isNaN(numberOfCups) || numberOfCups <= 0) {
        // If input is invalid, show error message on the webpage
        document.getElementById("output").innerHTML = `<p style="color: red;">Please enter a valid number of cups.</p>`;
        return;
    }

    // Function calculates ingredients needed to make a specific number of cups of Kenyan chai.
    // Displays the results on the web page in a clear, readable format.
    document.getElementById("output").innerHTML = `
        <h2>To make ${numberOfCups} cups of Kenyan Chai, you will need:</h2>
        <ul>
            <li>Water: ${water_required * numberOfCups} ml</li>
            <li>Milk: ${milk_required * numberOfCups} ml</li>
            <li>Tea Leaves (Majani): ${majani_required * numberOfCups} tablespoons</li>
            <li>Sugar (Sukari): ${sugar_required * numberOfCups} teaspoons</li>
        </ul>
        <p>Enjoy your Chai Bora!</p>
    `;
}
