addEventListener("DOMContentLoaded", (event) => {
  const timer = document.querySelector(".timer");
  const startBtn = document.querySelector(".start");
  const stopBtn = document.querySelector(".stop");
  const resetBtn = document.querySelector(".reset");
  let timeOutId;
  let startTime;

  function setUp() {
    function start() {
      clearTimeout(timeOutId);
      startTime = new Date().getTime();
      chrono();
    }

    function stop() {
      clearTimeout(timeOutId);
    }

    function reset() {
      clearTimeout(timeOutId);
      timer.innerHTML = "00 : 00 : 00";
    }

    startBtn.addEventListener("click", start);
    stopBtn.addEventListener("click", stop);
    resetBtn.addEventListener("click", reset);
  }
  function formatTime(minutes, seconds, milliseconds) {
    const formattedMinutes = minutes.toString().padStart(2, "0");
    const formattedSeconds = seconds.toString().padStart(2, "0");
    const formattedMilliseconds = milliseconds.toString().padStart(2, "0");
    return `${formattedMinutes} : ${formattedSeconds} : ${formattedMilliseconds}`;
  }

  function chrono() {
    const currentTime = new Date().getTime();
    const elapsedTime = currentTime - startTime;

    const minutes = Math.floor(elapsedTime / 60000);
    const seconds = Math.floor((elapsedTime % 60000) / 1000);
    const milliseconds = elapsedTime % 1000;

    timer.innerHTML = formatTime(minutes, seconds, milliseconds);

    timeOutId = setTimeout(chrono, 10);
  }
  setUp();
});
