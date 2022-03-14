/**
 * Check if is empty
 * @param {*} inputtx 
 * @returns 
 */
function empty(inputtx) {
    if (inputtx.value.length == 0) {
        //alert("empty field");  	
        return false;
    }
    return true;
}

/**
 * Get the name of a month
 * @param {*} month 
 * @returns 
 */
function getMonthName(month){
    const d = new Date();
    d.setMonth(month-1);
    const monthName = d.toLocaleString("en-US", {month: "long"});
    return monthName;
}

/**
 * Check if a date is valid, not in the past
 * @returns true if the date is valid
 */
function checkDate() {
    let dateO = document.getElementById("date");
    let date = dateO.value;
    let currentDate = new Date();
    let currentDay = currentDate.getDate();
    let currentMonth = currentDate.getMonth() + 1;
    let currentYear = currentDate.getFullYear();

    let day = date.slice(8);
    let month = date.slice(5, 7);
    let year = date.slice(0, 4);

    // if (day == "" || year == "" || day == "") {
    //     return true;
    // }

    if (year >= currentYear) {
        if(year == currentYear){
            if (month >= currentMonth) {
                if (month == currentMonth) {
                    if (day >= currentDay) {
                        if (day == currentDay) {
                            console.log(`The reservation is today (${date})`);
                            today = true;
                            return true;
                        }
                        console.log(`The reservation is in the next days (${day})`);
                        return true;
                    } else {
                        alert("Invalid Date --> invalid day");
                        dateO.value = "";
                        return false;
                    }
                }
                console.log(`The reservation is in the next months (${getMonthName(month)})`);
                return true;
            } else {
                alert("Invalid Date --> invalid month");
                dateO.value = "";
                return false;
            }
        }
        
        return true;
    } else {
        alert("Invalid Date --> invalid year");
        dateO.value = "";
        return false;
    }
}

/**
 * Support the checkDate() funcition, checks if the time is correct
 * @returns true if the time is valid
 */
function checkTime() {
    let timeO = document.getElementById("time");
    let time = timeO.value;
    let currentDate = new Date();
    let currentHours = currentDate.getHours();
    let currentMinutes = currentDate.getMinutes();
    // let currentTime = `${currentHours}:${currentMinutes}`;

    let hours = time.slice(0, 2);
    let minutes = time.slice(3);

    // if (time == "") {
    //     return null;
    // }

    if (hours >= currentHours) {
        if (hours == currentHours) {
            if (minutes >= currentMinutes) {
                console.log(`The reservation is today at the ${time}`);
                return true;
            } else {
                alert("Invalid Time --> hours");
                // timeO.value = "";
                return false;
            }
        }
        console.log(`The reservation is today at the ${time}`);
        return true;
    } else {
        alert("Invalid Time --> hours");
        // timeO.value = "";
        return false;
    }
}


// ---------------------- EVENTS HANDLING ------------------------ //
let today = false; //is the booking is today
submitButton = document.getElementById("submit-button");
formBook = document.getElementById("form");
dateButton = document.getElementById("date");
timeButton = document.getElementById("time");

// submitButton.addEventListener("click", ()=>{
//     checkDate();
// })

// formBook.addEventListener("submit", ()=>{
//     checkDate();
// })

dateButton.onchange = function(){
    checkDate();
};

timeButton.onfocusout = function(){
    console.log('focus out');
    // if(today){
    //     checkTime();
    // }
};