const timestamp = Date.now();
const time = new Date(timestamp);
let hours = time.getHours();
const Minutes = time.getMinutes();
const second = time.getSeconds();
let AM_PM = "AM";
if (hours >= 12 && hours <= 23) {
  AM_PM = "PM";
  hours = Math.floor(hours - 12);
}
console.log(hours, "::", Minutes, "::", second, "::", AM_PM);

// console.log(`${hours} :${Minutes} :${second}`);
