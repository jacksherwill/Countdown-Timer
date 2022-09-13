const daysId = document.getElementById('daysId');
const hoursId = document.getElementById('hoursId');
const minutesId = document.getElementById('minutesId');
const secondsId = document.getElementById('secondsId');

const birthday = new Date("Nov 24, 2022");

function countdown() {
    const birthdayDate = new Date(birthday);
    const currentDate = new Date();

    const totalSeconds = Math.floor(birthdayDate - currentDate) / 1000;
    
    const days = Math.floor(totalSeconds / 3600 / 24);
    const hours = Math.floor(totalSeconds / 3600) % 24;
    const minutes = Math.floor(totalSeconds / 60) % 60;
    const seconds = Math.floor(totalSeconds) % 60;

    daysId.innerHTML = days;
    hoursId.innerHTML = hours;
    minutesId.innerHTML = minutes;
    secondsId.innerHTML = seconds;

    console.log(days, hours, minutes, seconds);
}

// initial call
countdown()
setInterval(countdown, 1000)

