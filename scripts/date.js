function dateTime() {
    let eventDate = new Date();
    let hh = eventDate.getHours();
    let mm = eventDate.getMinutes();
    let ss = eventDate.getSeconds();
    let session = "AM";

    if (hh > 12) {
        session = "PM";
    }

    hh = (hh < 10) ? "0" + hh : hh;
    mm = (mm < 10) ? "0" + mm : mm;
    ss = (ss < 10) ? "0" + ss : ss;

    let time = hh + ":" + mm + ":" + ss + " " + session + " ";

    document.querySelector(".date-time").innerHTML = time;
    let t = setTimeout(function() { dateTime() }, 1000);

}

dateTime();