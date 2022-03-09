const date = new Date();
const year = date.getFullYear();
const month = date.toLocaleString('en-us', { month: 'long' });
const startDate = new Date(year, date.getMonth(), 1).getDay();
console.log(startDate);
const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

document.querySelector('.month-indicator h2').innerHTML = `${month} ${year}`;
document.querySelector('.date-grid button').firstChild.style.gridColumn = startDate;
