/**
 * Check if is empty
 * @param {*} input
 * @returns true if is not empty
 */
function empty(input) {
    return (input == "") ? false : true;
}

/**
 * Get the name of the day
 * @param {*} dateStr 
 * @param {*} locale 
 * @returns the day's name
 */
function getDayName(dateStr, locale) {
    let date = new Date(dateStr);
    return date.toLocaleDateString(locale, { weekday: 'long' });
}

/**
 * Get the name of a month
 * @param {*} month 
 * @returns 
 */
function getMonthName(month) {
    const d = new Date();
    d.setMonth(month - 1);
    const monthName = d.toLocaleString("en-US", { month: "long" });
    return monthName;
}

/**
 * Check if a date is valid, not in the past
 * @returns true if the date is valid
 */
function checkDate(date, dateO) {
    let currentDate = new Date();
    let currentDay = currentDate.getDate();
    let currentMonth = currentDate.getMonth() + 1;
    let currentYear = currentDate.getFullYear();

    let day = date.slice(8);
    let month = date.slice(5, 7);
    let year = date.slice(0, 4);

    if(!empty(date)){
        return true;
    }

    dayName = getDayName(date, "en");

    if (year >= currentYear) {
        if (year == currentYear) {
            if (month >= currentMonth) {
                if (month == currentMonth) {
                    if (day >= currentDay) {
                        if (day == currentDay) {
                            // console.log(`The reservation is today (${date})`);
                            today = true;
                            return true;
                        }
                        // console.log(`The reservation is in this month (${date})`);
                        return true;
                    } else {
                        alert("Invalid Date --> invalid day");
                        dateO.value = "";
                        return false;
                    }
                }
                // console.log(`The reservation is in this year (${getMonthName(month)})`);
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
function checkTime(time, timeO) {
    let currentDate = new Date();
    let currentHours = currentDate.getHours();
    let currentMinutes = currentDate.getMinutes();
    let hours = getHoursMinutes(time)[0];
    let minutes = getHoursMinutes(time)[1];

    if(!empty(time)){
        return true;
    }

    if (hours >= currentHours) {
        if (hours == currentHours) {
            if (minutes >= currentMinutes) {
                // console.log(`The reservation is today at the ${time}`);
                return true;
            } else {
                alert("Invalid Time --> minutes");
                timeO.value = "";
                return false;
            }
        }
        // console.log(`The reservation is today at the ${time}`);
        return true;
    } else {
        alert("Invalid Time --> hours");
        timeO.value = "";
        return false;
    }
}

function getHoursMinutes(time) {
    let hours = time.slice(0, 2);
    let minutes = time.slice(3);
    return [hours, minutes];
}

/**
 * Check if the time inserted by the user, is consistent with the booking hours
 * @returns true if the time is consistent
 */
function checkDayHour(time, timeO) {

    if(!empty(time)){
        return true;
    }
    
    let result;
    function checks(map) {
        let hour = getHoursMinutes(time)[0];
        if (hour < 17) {
            return (hour >= map.get("morning-start") && hour < map.get("morning-end"));
        } else {
            return (hour >= map.get("evening-start") && hour < map.get("evening-end"));
        }
    }
    
    switch (dayName) {
        case "Sunday":
            result = checks(SUNTIMES);
            break;
        case "Monday":
            result = checks(WEEKTIMES);
            break;
        case "Tuesday":
            result = checks(WEEKTIMES);
            break;
        case "Wednesday":
            result = checks(WEEKTIMES);
            break;
        case "Thursday":
            result = checks(WEEKTIMES);
            break;
        case "Friday":
            result = checks(WEEKTIMES);
            break;
        case "Saturday":
            result = checks(SATIMES);
            break;
    }
    if (result) {
        // console.log(`Time consistent with the resturant's schedule (${getHoursMinutes(time)[0]})`);
        return true;
    } else {
        alert(`Time is -not- consistent with the resturant's schedule`);
        timeO.value = "";
        return false;
    }

}

/**
 * Round times, reservations can only be made every THRESHOLD minutes
 */
function timeCorrection(time, timeO){
    let minuteI = getHoursMinutes(time)[1];
    let hourI = getHoursMinutes(time)[0];
    for(let i = 0; i < 60/THRESHOLD; i++){
        if (minuteI > THRESHOLD*i && minuteI < THRESHOLD*(i+1)) {
            let a = (i == 0) ? "0" : "";
            timeO.value = `${hourI}:${a+i*THRESHOLD}`;
        }
    }
}

/**
 * Check if the inserted name has at least 2 characters and if they are only letters
 * @param {*} name 
 * @returns true if is ok
 */
function isValidName(name) {
    const regex = new RegExp('^[a-zA-Z]+$');
    if ((name.length < 2 || !regex.test(name)) && empty(name)){
        alert(`Wrong name! At least 2 characters and only letters`);
        return false;
    } else {
        return true;
    }
}

/**
 * Check if the inserted name has at least 3 characters and if they are only letters
 * @param {*} name 
 * @returns true if is ok
 */
function isValidString(string) {
    const regex = new RegExp('^[a-zA-Z]+$');
    if ((string.length < 3 || !regex.test(string)) && empty(string)){
        alert(`Wrong allergies! At least 3 characters and only letters`);
        return false;
    } else {
        return true;
    }
}

/**
 * Check if the inserted phone number has between 7-15 digits and if they are only numbers
 * @param {*} number 
 * @returns true if phone number is ok
 */
function isValidNumber(number) {
    const regex = new RegExp('^[0-9]+$');
    if ((!(number.length >= 7 && number.length <= 15) || !regex.test(number)) && empty(number)){
        alert(`Wrong phone number! Between 7-15 digits in your phone number`);
        return false;
    } else {
        return true;
    }
}

//----------------------- GLOBAL VARIABLES ----------------------- //
let today = false; //if the booking is today
let dayName;
const WEEKTIMES = new Map([
    ["morning-start", 12],
    ["morning-end", 14],
    ["evening-start", 19],
    ["evening-end", 21]
]);
const SATIMES = new Map([
    ["morning-start", 12],
    ["morning-end", 15],
    ["evening-start", 19],
    ["evening-end", 22]
]);
const SUNTIMES = new Map([
    ["morning-start", 12],
    ["morning-end", 16],
    ["evening-start", 19],
    ["evening-end", 23]
]);
const THRESHOLD = 15;


// ---------------------- EVENTS HANDLING ------------------------ //
formBook = document.getElementById("book-form");
dateButton = document.getElementById("date");
timeButton = document.getElementById("time");
nameButton = document.getElementById("name");
numberButton = document.getElementById("phone");
allergiesButton = document.getElementById("allergies");

dateButton.addEventListener("change", () => {
    let date = dateButton.value;
    checkDate(date, dateButton);
});

dateButton.addEventListener("focusout", () => {
    let date = dateButton.value;
    checkDate(date, dateButton);
});

allergiesButton.addEventListener("change", () => {
    isValidString(document.getElementById("allergies").value);
});

nameButton.addEventListener("change", () => {
    isValidName(document.getElementById("name").value);
});

numberButton.addEventListener("change", () => {
    isValidNumber(document.getElementById("phone").value);
});

timeButton.addEventListener("focusout", () => {
    let time = timeButton.value;
    if (today) {
        checkTime(time,timeButton);
        today = false;
    }
    if (checkDayHour(time, timeButton)){
        timeCorrection(time, timeButton);
    }
   
});

formBook.addEventListener("submit", (ev)=>{
    ev.preventDefault();
    let date = dateButton.value;
    let time = timeButton.value;
    
    if(checkDate(date, dateButton)){
        if (today) {
            checkTime(time,timeButton);
            today = false;
        }
        if (checkDayHour(time, timeButton)){
            timeCorrection(time, timeButton);
            formBook.submit();
            return true;
        }
    } else {
        return false;
    }
});