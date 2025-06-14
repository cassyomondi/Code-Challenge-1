// Function is called so that user receives prompt and result is displayed on the webpage
function calculateChaiIngredients(numberOfCups)
{
    // The Standard Recipe for 1 Cup of Chai
    const water_required = 200;
    const milk_required = 50;
    const majani_required = 1;
    const sugar_required = 2;


    // Function calculates ingredients needed to make a specific number of cups of Kenyan chai. Prints the results to the console in a clear, readable format.
    
    return `To make ${numberOfCups} cups of Kenyan Chai, you will need:
Water: ${water_required * numberOfCups} ml
Milk: ${milk_required * numberOfCups} ml
Tea Leaves (Majani): ${majani_required * numberOfCups} tablespoons
Sugar (Sukari): ${sugar_required * numberOfCups} teaspoons

Enjoy your Chai Bora!`;
    
} 
