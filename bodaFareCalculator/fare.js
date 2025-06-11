// Function is called so that user receives prompt and result is displayed on the webpage
function calculateBodaFare () {

    // Fare Calculation Rules:
    const base_fare = 50;
    const per_km_charge = 15;

    // Function prompts the user to enter the distance of their trip in kilometers.
    let distanceInput = prompt("Unafika wapi Mkubwa? Kilometer ngapi?:");

    // Takes the distanceInKm (as a number) as an argument.
    let distanceInKm = Number(distanceInput);

    if (isNaN(distanceInKm) || distanceInKm <= 0) {
        // If input is invalid, show error message on the webpage
        document.getElementById("output").innerHTML = `<p style="color: red;">Please enter a valid distance in kilometers.</p>`;
        return;
    }

    // Calculates the total estimated fare using the formula: totalFare = baseFare + (distanceInKm * chargePerKm)
    let total_estimated_fare = base_fare + (distanceInKm * per_km_charge);

    // Displays the result to the user in a user-friendly format on the webpage.
    document.getElementById("output").innerHTML = `
        <h2>Uko kwote? Io ni ${distanceInKm} km:</h2>
        <ul>
            <li>Base Fare (Ukikalia Pikipiki): KES ${base_fare}</li>
            <li>Distance Fare (Mpaka Uko): KES ${per_km_charge * distanceInKm}</li>
            <li><strong>Total Fare:</strong> KES ${total_estimated_fare}</li>
        </ul>
        <p>Panda Pikipiki!</p>
    `;
}
