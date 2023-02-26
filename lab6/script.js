// GLOBAL VARIABLES

let futureValue;
let investment;
let rate;
let years;

//COLLECT VALUES FROM USER

investment = parseFloat(prompt("Enter investment amount as xxxx.xx"));
while (isNaN(investment)) {
  investment = parseFloat(
    prompt("Please enter a VALID investment amount as xxxx.xx")
  );
}
rate = parseFloat(prompt("Enter the rate that you want on investment as xx.x"));
if (isNaN(rate) || rate > 6 || rate <= 0) {
  while (isNaN(rate) || rate > 6 || rate <= 0) {
    if (isNaN(rate)) {
      rate = parseFloat(
        prompt("Enter a valid NUMERIC rate that you want to invest as xx.x")
      );
    } else {
      rate = parseFloat(prompt("Enter a REALESTIC numeric rate from 1% - 6%"));
    }
  }
}
years = parseInt(prompt("How many years do you want to invest for"));
while (years > 30 || years <= 0 || isNaN(years)) {
  years = parseInt(prompt("Please enter a value between 1 and 30"));
}
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
