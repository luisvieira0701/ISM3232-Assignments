let employeeName = "Michael Jordan"
const employeeID = 23
var isActice = true
console.log(employeeName, typeof "Michael Jordan", employeeID, typeof 23, isActice, typeof true)

let products = ["Ice Cream", "Popsicle", "Gelato"];
const productDetails = {
  name: "Gelato",
  price: 500,
  inStock: true
};
console.log(products);
console.log(productDetails);

let accountBalance = 200
console.log("Initial Balance:", accountBalance);
accountBalance += 200;
console.log("Updated Balance:", accountBalance);
accountBalance -= 150
console.log("Updated Balance:", accountBalance);
accountBalance *= 5
console.log("Updated Balance:", accountBalance);
accountBalance /= 2
console.log("Updated Balance:", accountBalance);
accountBalance %= 4
console.log("Updated Balance:", accountBalance);

let employeeScore1 = 79
let employeeScore2 = 85

console.log(employeeScore1 > employeeScore2);
console.log(employeeScore1 < employeeScore2);
console.log(employeeScore1 >= employeeScore2);
console.log(employeeScore1 <= employeeScore2);
console.log(employeeScore1 === employeeScore2);
console.log(employeeScore1 !== employeeScore2);

let hasKeyCard = true
let hasPermission = false

console.log(hasKeyCard && hasPermission)
console.log(hasKeyCard || hasPermission)
console.log(!hasKeyCard)