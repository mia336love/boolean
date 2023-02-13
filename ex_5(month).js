// Найти по заданному номеру месяца, количество дней в нем

let monthNumber = 11;
//let daysInMonth;

let d31 = [1, 3, 5, 7, 8, 10, 12];
let d30 = [4, 6, 9, 11];
if (d31.includes(monthNumber)) {
  console.log("31 days");
} else if (d30.includes(monthNumber)) {
  console.log("30 days");
} else {
  console.log("28 days (or 29 if it's leap year)");
}
//console.log("Number of days in a month: ", daysInMonth);
//console.log(d31.includes(monthNumber));
