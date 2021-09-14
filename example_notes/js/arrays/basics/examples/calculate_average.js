const carPrices = [];
carPrices.push(5000);
carPrices.push(10000);
carPrices.push(20000);

let sum = 0;
carPrices.forEach(price => (sum += price));
const averagePrice = sum / carPrices.length;
console.log(`The average price of a car is ${averagePrice}`);