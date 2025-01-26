// time Function 

function time() {
    const date = new Date();

    // time 
    let hour = date.getHours();
    let min = date.getMinutes();
    let sec = date.getSeconds(); 
    let meridiem = null;

    if (hour == 0){
        hour = 12;
        meridiem = "AM"
    }

    if (hour > 12){
        hour = hour - 12;
        meridiem = "PM";
    }

    if(hour < 10){
        hour = "0" + hour;
    }

    if(min<10){
        min = "0" + min;
    }

    if(sec<10){
        sec = "0" + sec;
    }

    let time = `${hour} : ${min} : ${sec} ${meridiem}`;
    document.getElementById("time").innerHTML = time;

    // Date 
    currDate = date.getDate();
    currMonth = date.getMonth();
    currYear = date.getFullYear();

    if(currDate<10){
        currDate = "0"+ currDate;
    }
    if(currMonth<10){
        currMonth = ""+ currMonth;
    }

    let dateFormat = `${currDate} / ${currMonth + 1} / ${currYear}`

    document.getElementById("date").innerHTML= dateFormat;

    // weekdays
    let weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    let day = weekday[date.getDay()];
    let today = document.getElementById("day").innerHTML = day;
}

setInterval(time, 1000);