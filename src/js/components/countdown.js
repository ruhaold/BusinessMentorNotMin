export function getSecondsUntilMidnight() {
  const now = new Date();
  const midnight = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1);
  return Math.floor((midnight - now) / 1000);
}

export function startCountdown(duration) {
  let timer = duration, hours, minutes, seconds;

  const interval = setInterval(() => {
      hours = Math.floor(timer / 3600);
      minutes = Math.floor((timer % 3600) / 60);
      seconds = timer % 60;

      document.getElementById('timer').textContent =
          `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;

      if (--timer < 0) {
          clearInterval(interval);
          document.getElementById('selectButton').disabled = true;
          document.getElementById('timer').textContent = "00:00:00";
      }
  }, 1000);
}
