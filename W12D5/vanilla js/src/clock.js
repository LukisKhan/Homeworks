class Clock {
  constructor() {
    const currentTime = new Date();
    this.hours = currentTime.getHours();
    this.minutes = currentTime.getMinutes();
    this.seconds = currentTime.getSeconds();
    setInterval(this._tick.bind(this), 1000);

  }

  printTime() {
    const timeString = [this.hours, this.minutes, this.seconds].join(":");
    return timeString;
  }

  _tick() {
    this._incrementSeconds();
    this.printTime();
  }

  _incrementSeconds() {
    this.seconds += 1;
    if (this.seconds === 60) {
      this.seconds = 0;
      this._incrementMinutes();
    }
  }

  _incrementMinutes() {
    this.minutes += 1;
    if (this.minutes === 60) {
      this.minutes = 0;
      this._incrementHours();
    }
  }

  _incrementHours() {
    this.hours = (this.hours + 1) % 24;
  }
}

export const clock = new Clock();

const clockElement = document.getElementById('clock');
const timeElement = document.createElement('p');
timeElement.innerHTML = clock.printTime();
setInterval(() => {
  timeElement.innerHTML = clock.printTime();
}, 1000);
clockElement.appendChild(timeElement);


