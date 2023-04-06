const newYear = "1 January 2024";

function countDown() {
  const newYears = new Date(newYear);
  const currentDate = new Date();
  const timeLeft = (newYears - currentDate) / 1000;
  const days = Math.floor(timeLeft / 3600 / 24);
  const hours = Math.floor(timeLeft / 3600) % 24;
  const minutes = Math.floor(timeLeft / 60) % 60;
  const seconds = Math.floor(timeLeft % 60);

  document.getElementById("days").innerHTML = days;
  document.getElementById("hours").innerHTML = timeFormat(hours);
  document.getElementById("minutes").innerHTML = timeFormat(minutes);
  document.getElementById("seconds").innerHTML = timeFormat(seconds);
}
function timeFormat(time) {
  if (time < 10) {
    return `0${time}`;
  }
  return time;
}
countDown();
setInterval(countDown, 1000);
