"use strict";
{
  const timer = document.getElementById("timer");
  const start = document.getElementById("start");
  const stop = document.getElementById("stop");
  const reset = document.getElementById("reset");

  let startTime;
  let timeoutId;
  let elapsedTime = 0;

  function countUp() {
    const d = new Date(Date.now() - startTime + elapsedTime);
    const h = d.getHours() - 9;
    const m = d.getMinutes();
    const s = d.getSeconds();
    const ms = d.getMilliseconds();
    timer.textContent = `${h}:${m}:${s}:${ms}`;

    timeoutId = setTimeout(() => {
      countUp();
    }, 100);
  }

  function setButtonStateInitial() {
    start.disabled = false;
    stop.disabled = true;
    reset.disabled = true;
  }
  function setButtonStateRunning() {
    start.disabled = true;
    stop.disabled = false;
    reset.disabled = true;
  }
  function setButtonStateStopped() {
    start.disabled = false;
    stop.disabled = true;
    reset.disabled = false;
  }

  setButtonStateInitial();

  start.addEventListener("click", () => {
    setButtonStateRunning();
    startTime = Date.now();
    countUp();
  });

  stop.addEventListener("click", () => {
    setButtonStateStopped();
    clearTimeout(timeoutId);
    elapsedTime = Date.now() - startTime;
  });

  reset.addEventListener("click", () => {
    timer.textContent = "0:0:0:0";
	  setButtonStateInitial();
	  elapsedTime = 0
  });
}
