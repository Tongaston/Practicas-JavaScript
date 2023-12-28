const stopWatch = document.getElementById('watch');
const playPauseButton = document.getElementById('play-pause');
const secondSphere = document.getElementById('second-sphere');

let stopWatchInterval;
let runningTime = 0;

const playPause = () => {
  const isPaused = !playPauseButton.classList.contains('running');
  if (isPaused) {
    playPauseButton.classList.add('running');
    start();
  } else {
    playPauseButton.classList.remove('running');
    pause();
  }
};

const pause = () => {
  secondSphere.style.animationPlayState = 'paused';
  clearInterval(stopWatchInterval);
};

const stop = () => {
    secondSphere.style.transform = 'rotate(-90deg) translateX(80px)'
    secondSphere.style.animation = 'none'
    playPauseButton.classList.remove('running')
    runningTime = 0
    clearInterval(stopWatchInterval)
    stopWatch.textContent = '00:00'
}

const start = () => {
  secondSphere.style.animation = 'rotacion 60s linear infinite';
  let startTime = Date.now() - runningTime;
  secondSphere.style.animationPlayState = 'running';

  stopWatchInterval = setInterval(() => {
    runningTime = Date.now() - startTime;
    stopWatch.textContent = calculateTime(runningTime);
  }, 1000);
};

const calculateTime = (runningTime) => {
  const totalSeconds = Math.floor(runningTime / 1000);
  const totalMinutes = Math.floor(totalSeconds / 60);

  const displaySeconds = (totalSeconds % 60).toString().padStart(2, '0');
  const displayMinutes = totalMinutes.toString().padStart(2, '0');

  return `${displayMinutes}:${displaySeconds}`;
};
