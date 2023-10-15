const secondsHand = document.getElementById('seconds-hand');
const minutesHand = document.getElementById('minutes-hand');
const hoursHand = document.getElementById('hours-hand');
const time = document.getElementById('time');

const getTime = () => {
    const now = new Date();
    let seconds = now.getSeconds();
    if(seconds < 10) {
        seconds = `0${seconds}`;
    }
    let minutes = now.getMinutes();
    if(minutes < 10) {
        minutes = `0${minutes}`;
    }
    let hours = now.getHours();
    if(hours < 10) {
        hours = `0${hours}`;
    }
    const timeInterval = 6; // 360 degrees in circle divided by minutes in hour or seconds in a minute
    const hourInterval = 30; // 360 degrees in circle divided by 12 for hours

    time.textContent = `${hours}:${minutes}:${seconds}`;

    secondsHand.style.transform = `rotate(${seconds * timeInterval}deg)`;
    minutesHand.style.transform = `rotate(${minutes * timeInterval + seconds / 10}deg)`; 
    // "+ seconds / 10" makes hand move smoother, gradually moving instead of jumping, seconds/10 gives a max of 6 (the change for each minute)
    hoursHand.style.transform = `rotate(${hours * hourInterval + minutes / 2})`
    // "+ minutes / 2" makes hand move smoother, gradually moving instead of jumping, minutes/2 gives a max of 30 (the change for each hour)

}

setInterval(getTime, 500);
