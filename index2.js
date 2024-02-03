const hourEl = document.getElementById("hours");
const minuteEl = document.getElementById("minutes");
const secondEl = document.getElementById("seconds");
const ampmEl = document.getElementById("text-am");
const getbody = document.getElementById("body");

function updateClock() {
  let h = new Date().getHours();
  let m = new Date().getMinutes();
  let s = new Date().getSeconds();
  let am = h < 12 ? "AM" : "PM";

  h = h % 12 || 12;

  // !try this to automatically reload
  document.body.classList.remove(
    "middle-night",
    "early",
    "dawn",
    "morning",
    "mid-day",
    "afternoon",
    "late-afternoon",
    "dusk",
    "night",
    "late-night"
  );

  if (am === "AM") {
    if (h === 12) {
      document.body.classList.add("middle-night");
    } else if (h === 1) {
      document.body.classList.add("middle-night");
    } else if (h === 2 && h < 4) {
      document.body.classList.add("early");
    } else if (h === 4 && h < 6) {
      document.body.classList.add("dawn");
    } else if (h > 6 && h < 9) {
      document.body.classList.add("morning");
    } else if (h > 9 && h < 12) {
      document.body.classList.add("mid-day");
    }
  } else {
    if (h === 12) {
      document.body.classList.add("afternoon");
    } else if (h === 1) {
      document.body.classList.add("late-afternoon");
    } else if (h >= 2 && h < 4) {
      document.body.classList.add("late-afternoon");
    } else if (h >= 4 && h < 7) {
      document.body.classList.add("dusk");
    } else if (h >= 7 && h < 9) {
      document.body.classList.add("night");
    } else if (h >= 9 && h < 11) {
      document.body.classList.add("late-night");
    } else if (h === 11 && h < 12) {
      document.body.classList.add("middle-night");
    }
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
