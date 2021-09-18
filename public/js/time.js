 // function for live clock. refreshes every 1 second.
 var setTime = window.setInterval(function () {
    var htmlDate;
    var addSec, addMin;
    var today = new Date();

    if (String(today.getSeconds()) <= 9) {
        addSec = ":0";
    } else {
        addSec = ":";
    }

    if (String(today.getMinutes()) <= 9) {
        addMin = ":0";
    } else {
        addMin = ":";
    }

    htmlDate = String(today.getHours()) + addMin + String(today.getMinutes()) + addSec + String(today.getSeconds());
    var setTime = document.getElementById("demo").innerHTML = htmlDate + " PST";
}, 300);