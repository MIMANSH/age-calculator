let obj = {};

let day = document.getElementById('days');
let month = document.getElementById('months');
let year = document.getElementById('years');
let yearOut = document.getElementById('year-out');
let monthOut = document.getElementById('month-out');
let dayOut = document.getElementById('day-out');

day.addEventListener('input', () => {
  obj.day = day.value;
  console.log(obj);
});

month.addEventListener('input', () => {
  obj.month = month.value;
  console.log(obj);
});

year.addEventListener('input', () => {
  obj.year = year.value;
  console.log(obj);
});

document.getElementById('icons').onclick = function () {
  myFunction();
};

function myFunction() {
  const today = moment();
  const birth = moment(`${obj.year}-${obj.month}-${obj.day}`, 'YYYY-MM-DD');

  const duration = moment.duration(today.diff(birth));

  const days = duration.days();
  const months = duration.months();
  const years = duration.years();
  console.log(days, months, years);
  document.getElementById('day-out').innerHTML = days;
  document.getElementById('month-out').innerHTML = months;
  document.getElementById('year-out').innerHTML = years;
}
