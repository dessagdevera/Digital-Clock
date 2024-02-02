const hourEl = document.getElementById("hours");
const minuteEl = document.getElementById("minutes");
const secondEl = document.getElementById("seconds");
const ampmEl = document.getElementById("text-am");
const getbody = document.getElementById("body");

function updateClock() {
  let h = new Date().getHours();
  let m = new Date().getMinutes();
  let s = new Date().getSeconds();
  let am = "AM";

  // fix this in 12 hours only format

  if ((h >= 0) & (h < 3)) {
    document.body.classList.add("middle-night");
  } else if (h > 3 && h < 4) {
    document.body.classList.add("early");
  } else if (h > 4 && h < 6) {
    document.body.classList.add("dawn");
  } else if (h > 6 && h < 9) {
    document.body.classList.add("morning");
  } else if (h > 9 && h < 12) {
    document.body.classList.add("mid-day");
  } else if (h > 12 && h < 14) {
    document.body.classList.add("afternoon");
    am = "PM";
  } else if (h > 14 && h < 16) {
    document.body.classList.add("late-afternoon");
    am = "PM";
  } else if (h > 16 && h < 19) {
    document.body.classList.add("dusk");
    am = "PM";
  } else if (h > 19 && h < 21) {
    document.body.classList.add("night");
    am = "PM";
  } else if (h > 21 && h < 23) {
    document.body.classList.add("late-night");
    am = "PM";
  }

  h = h < 10 ? "0" + h : h;
  m = m < 10 ? "0" + m : m;
  s = s < 10 ? "0" + s : s;

  hourEl.innerText = h;
  minuteEl.innerText = m;
  secondEl.innerText = s;
  ampmEl.innerText = am;
  setTimeout(() => {
    updateClock();
  }, 1000);
}

updateClock();
