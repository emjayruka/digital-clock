const hours = document.getElementById("hours")
const minutes = document.getElementById("minutes")
const seconds = document.getElementById("seconds")


function digiClock() {

    var currentDate = new Date()
    var hr = currentDate.getHours()
    var min = currentDate.getMinutes()
    var sec = currentDate.getSeconds()


    if (hr < 10) {
        hr= "0"+ hr
     }
     if (min < 10) {
        min= "0"+ min
     }
     if (sec < 10) {
         sec= "0" + sec
     }
 
    hours.textContent = hr
    minutes.textContent = min
    seconds.textContent = sec

    
}

setInterval(digiClock,1000)