let isRunning = false;

self.onmessage = function (event) {
  if (isRunning) return;
  isRunning = true;
  const state = event.data;
  const { activeTask, secondsRemaining } = state;
  const endTime = activeTask.startDate + secondsRemaining * 1000;
  const now = Date.now();
  let countDownSeconds = Math.ceil((endTime - now) / 1000);
  console.log(new Date(endTime));
  function tick() {
    self.postMessage(countDownSeconds);
    const now = Date.now();
    countDownSeconds = Math.floor((endTime - now) / 1000);
    setTimeout(tick, 1000);
  }
  tick();
};
