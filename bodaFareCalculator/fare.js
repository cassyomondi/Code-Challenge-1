// Function is called so that user receives prompt and result is displayed on the webpage
function calculateBodaFare (distanceInKm) {

    // Fare Calculation Rules:
    const base_fare = 50;
    const per_km_charge = 15;

    

    // Calculates the total estimated fare using the formula: totalFare = baseFare + (distanceInKm * chargePerKm)
    let total_estimated_fare = base_fare + (distanceInKm * per_km_charge);

    // Prints the result to the console in a user-friendly format.
    return `Uko kwote? Io ni ${distanceInKm} km:
Ukikalia Pikipiki: KES ${base_fare}
Mpaka Uko: KES ${per_km_charge * distanceInKm }
Total: KES ${total_estimated_fare}

Panda Pikipiki!`;

} 
