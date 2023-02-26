// GLOBAL VARIABLES

let futureValue;
let investment;
let rate;
let years;

//COLLECT VALUES FROM USER

investment = parseFloat(prompt("Enter investment amount as xxxx.xx"));
rate = parseFloat(prompt("Enter the rate that you want on investment as xx.x"));
years = parseInt(prompt("How many years do you want to invest for"));

//CALCULATE THE FUTURE VALUE

futureValue = investment;
for (let i = 0; i < years; i++) {
  futureValue = futureValue + (futureValue * rate) / 100;
}
//DISPLAY RESULTS

document.write(`Investment amount: $${investment.toFixed(2)}<br>`);
document.write(`Interest rate: ${rate.toFixed(2)}%<br>`);
document.write(`Years: ${years}<br>`);
document.write(`Future value ${futureValue.toFixed(2)}`);
