//VARIABLES
let miles;
let gallons;
let mpg;
let again = "y";

do {
  miles = parseFloat(prompt("Enter the number of miles driven"));
  gallons = parseFloat(prompt("Enter the gallon capacity of your vehicle"));
  if (!isNaN(miles) && miles > 0 && !isNaN(gallons) && gallons > 0) {
    mpg = miles / gallons;
    console.log(`Your car gets ${mpg} miles per gallon.`);
  } else {
    alert("One or both of your entries are invalid.");
  }
  again = prompt("Do you want to run again? (y/n)");
} while (again === "y");
console.log("Application had ended.");
