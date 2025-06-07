// Function is called so that user receives prompt
calculateBodaFare();

function calculateBodaFare () {

    // Fare Calculation Rules:
    const base_fare = 50;
    const per_km_charge = 15;

    // Functions Prompts the user to enter the distance of their trip in kilometers. 
    let distanceInput = prompt("Unafika wapi Mkubwa? Kilometer ngapi?:");

    // Takes the distanceInKm (as a number) as an argument.
    let distanceInKm = Number(distanceInput);

    // Calculates the total estimated fare using the formula: totalFare = baseFare + (distanceInKm * chargePerKm)
    let total_estimated_fare = base_fare + (distanceInKm * per_km_charge);

    // Prints the result to the console in a user-friendly format.
    console.log ( `Uko kwote? Io ni ${distanceInKm} km:
Ukikalia Pikipiki: KES ${base_fare}
Mpaka Uko: KES ${per_km_charge * distanceInKm }
Total: KES ${total_estimated_fare}

Panda Pikipiki!`);

}