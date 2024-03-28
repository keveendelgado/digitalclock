function currentTime() {
    let theTime = new Date();
    let theHours = theTime.getHours();
    let theMinutes = theTime.getMinutes();
    let theSeconds = theTime.getSeconds();
    let dayOfWeekNumber = theTime.getDay();
    let theAmPm = theHours >= 12 ? "PM" : "AM";
    const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    let dayOfWeek = daysOfWeek[dayOfWeekNumber];

    theHours = theHours % 12;
    theHours = theHours ? theHours : 12; // the hour '0' should be '12'
    theMinutes = theMinutes < 10 ? "0" + theMinutes : theMinutes;
    theSeconds = theSeconds < 10 ? "0" + theSeconds : theSeconds;

    document.getElementById("dayOfWeek").innerHTML = dayOfWeek;
    document.getElementById("hour").innerHTML = theHours;
    document.getElementById("minute").innerHTML = theMinutes;
    document.getElementById("second").innerHTML = theSeconds;
    document.getElementById("ampm").innerHTML = theAmPm;

    // Since you are using the background color of the colons for blinking,
    // this code alternates the color between red and white every second.
    let colonColor = theSeconds % 2 === 0 ? "red" : "white";
    document.getElementById("colon1").style.color = colonColor;
    document.getElementById("colon2").style.color = colonColor;

    // Call this function again just after the next second has started
    setTimeout(currentTime, 1000 - theTime.getMilliseconds());
}

// Call the function currentTime initially to start the cycle
currentTime();
