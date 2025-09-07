let hou = document.querySelector(".hours");
let min = document.querySelector(".min");
let sec = document.querySelector(".sec");
let w = document.querySelector(".w");

let date = new Date();
let seconds = date.getSeconds();
let minutes = date.getMinutes();
let hours = date.getHours();

function format(time) {
  if (time > 12) {
    return (time = time - 12);
  } else {
    return time;
  }
}

function formatt(time) {
  return time < 10 ? `0${time}` : time;
}

setInterval(() => {
  seconds++;

  if (seconds === 60) {
    seconds = 0;
    minutes++;
  }
  if (minutes === 60) {
    minutes = 0;
    hours++;
  }
  if (hours > 12) {
    w.innerHTML = "PM";
  } else {
    w.innerHTML = "AM";
  }
  hou.innerHTML = formatt(format(hours));
  min.innerHTML = formatt(minutes);
  sec.innerHTML = formatt(seconds);
}, 1000);
