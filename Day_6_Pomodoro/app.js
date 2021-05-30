var minute = 00;
var second = 00;
baslat = false;
var interval = null;

const MINUTE = document.getElementById("min");
const SECOND = document.getElementById("sec");
const READY = document.getElementById("ready");
const POMO = document.querySelector('.pomo');
const SHORT = document.querySelector('.short');
const LONG = document.querySelector('.long');

POMO.addEventListener('click', function (baslat) {
    baslat = false;
    console.log(baslat);
    stop();
    READY.innerHTML = 'START';
    document.body.style.background = 'lightcoral'
    let minute = 25;
    let second = '0' + 0;
    changeTime(minute, second);
    MINUTE.innerHTML = minute;
    SECOND.innerHTML = second;

})


SHORT.addEventListener('click', function (baslat) {
    baslat = false;
    console.log(baslat);
    stop();
    READY.innerHTML = 'START';
    document.body.style.background = '#00adb5'
    baslat = false;
    let minute = '0' + 5;
    let second = '0' + 0;
    changeTime(minute, second);
    MINUTE.innerHTML = minute;
    SECOND.innerHTML = second;


})

LONG.addEventListener('click', function (baslat) {
    baslat = false;
    console.log(baslat);
    stop();
    READY.innerHTML = 'START';
    document.body.style.background = '#112d4e'
    let minute = 15;
    let second = '0' + 0;
    changeTime(minute, second);
    MINUTE.innerHTML = minute;
    SECOND.innerHTML = second;


})


READY.addEventListener('click', function () {
    baslat = !baslat;
    baslat == true ? READY.innerHTML = 'STOP' : READY.innerHTML = 'START';
    baslat == true ? start(baslat) : stop();
    console.log(baslat);


});


const CountDown = () => {
    MINUTE.innerHTML = minute;
    SECOND.innerHTML = second;

    if (second == 0 && minute != 0) {
        minute--;
        if (minute < 10) minute = '0' + minute;
        MINUTE.innerHTML = minute;
        second = 59;
        if (second < 10) second = '0' + second;
        SECOND.innerHTML = second;
    }

    else if (second > 0) {
        second--;
        if (second < 10) second = '0' + second;
        SECOND.innerHTML = second;
    }

    else if (second == 0 && minute == 0) {
        //tenefüs müziği
        document.getElementById('sarıyor').play()
        stop();
    }
}

const start = (_baslat) => {

    if (_baslat) {
        interval = setInterval(CountDown, 1000);
    }

}

const stop = () => {
    clearInterval(interval);
    baslat = false;

}

const changeTime = (min, sec) => {
    minute = min;
    second = sec;
}






