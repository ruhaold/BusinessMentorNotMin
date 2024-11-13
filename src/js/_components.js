import { getSecondsUntilMidnight, startCountdown } from './components/countdown.js';
import { initializeButtonHandlers } from './components/buttonHandler.js';

window.onload = () => {
  const countdownDuration = getSecondsUntilMidnight();
  startCountdown(countdownDuration);
  initializeButtonHandlers();
};
