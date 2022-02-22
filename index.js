// Lodash
const lodash = require("lodash");

let arr = [13, 5, 2, 7, 56, 1];
let final = lodash.concat(arr, 2, 4, [5]);
console.log(final);
console.log(lodash.chunk(["a", "b", "c", "d"], 2));
console.log(lodash.difference([2, 1], [2, 3]));
console.log(lodash.intersection([2, 3, 4, 1], [2, 3]));
console.log(lodash.join(["a", "b", "c"], "~"));
console.log(lodash.reverse(arr));

// Moment
const moment = require("moment");

let now = moment();
console.log(now.format());
console.log(now.format(`Feb 12 21`));
console.log(now.format("dddd, MMMM Do YYYY"));

// let d2 = moment([2021, 01, 12]);
// console.log(d2.format("ll"));

let d1 = moment("2014-11-11");
let d2 = moment("2015-09-11");
let d3 = moment("2014-11-27");
let d4 = moment("2015-09-16");

let days = d2.diff(d1, "days");
console.log(`Difference in days: ${days}`);

let hours = d2.diff(d1, "hours");
console.log(`Difference in hours: ${hours}`);

let days2 = d4.diff(d3, "days");
console.log(`Difference in days: ${days2}`);

let hours2 = d4.diff(d3, "hours");
console.log(`Difference in hours: ${hours2}`);

// Manipulating Dates

console.log(`Now: ${now.format("ll")}`);
// adds 7 days to current date
now.add("7", "days");
console.log(`Adding seven days: ${now.format("ll")}`);
// adds 7 months to current date
now.add("7", "months");
console.log(`Adding seven months: ${now.format("ll")}`);
// adds 7 years to current date
now.add("7", "years");
console.log(`Adding seven years: ${now.format("ll")}`);
// subtracts 7 days to current date
now.subtract("7", "days");
console.log(`Subtracting seven days: ${now.format("ll")}`);
// subtracts 7 months to current date
now.subtract("7", "months");
console.log(`Subtracting seven months: ${now.format("ll")}`);
// subtracts 7 years to current date
now.subtract("7", "years");
console.log(`Subtracting seven years: ${now.format("ll")}`);

// Moment.js datetime parts

let year = now.get("year");
let month = now.get("month"); // 0 to 11
let date = now.get("date");
let hour = now.get("hour");
let minute = now.get("minute");
let second = now.get("second");
let millisecond = now.get("millisecond");

console.log("Year: " + year);
console.log("Month: " + month);
console.log("Date: " + date);
console.log("Hour: " + hour);
console.log("Minute: " + minute);
console.log("Second: " + second);
console.log("Millisecond: " + millisecond);

// Check if the following date is valid or not:
let day1 = moment("2020-01-01");
let day2 = moment("2020-14-01");

if (day1.isValid()) {
  console.log("Day1 is valid");
} else {
  console.log("Day1 is not valid");
}

if (day2.isValid()) {
  console.log("Day2 is valid");
} else {
  console.log("Day2 is not valid");
}

// Assume year >= 1582 in the Gregorian calendar.

let years = [2019, 2020, 1900];

for (year of years) {
  let ym = moment([year]);

  if (ym.isLeapYear()) {
    console.log(`${year} is a leap year`);
  } else {
    console.log(`${year} is not a leap year`);
  }
}