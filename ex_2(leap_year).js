// Написать программу, проверяющую является ли год високосным

let year = 2020;

if ((year % 4 === 0) & (year % 100 !== 0) || year % 400 === 0) {
  console.log("This year is leap");
} else {
  console.log("This year isn't leap");
}
