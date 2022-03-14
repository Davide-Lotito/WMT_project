/**
 * Check if is empty
 * @param {*} inputtx 
 * @returns true if is not empty
 */
function empty(inputtx) {
    if (inputtx.value.length == 0) {
        //alert("empty field");  	
        return false;
    }
    return true;
}

/**
 * Get the name of the day
 * @param {*} dateStr 
 * @param {*} locale 
 * @returns the day's name
 * 
 * https://stackoverflow.com/questions/24998624/day-name-from-date-in-js
 * 
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
function checkDate() {
    dateO = document.getElementById("date");
    date = dateO.value;
    let currentDate = new Date();
    let currentDay = currentDate.getDate();
    let currentMonth = currentDate.getMonth() + 1;
    let currentYear = currentDate.getFullYear();

    let day = date.slice(8);
    let month = date.slice(5, 7);
    let year = date.slice(0, 4);

    dayName = getDayName(date, "en");

    if (year >= currentYear) {
        if (year == currentYear) {
            if (month >= currentMonth) {
                if (month == currentMonth) {
                    if (day >= currentDay) {
                        if (day == currentDay) {
                            console.log(`The reservation is today (${date})`);
                            today = true;
                            return true;
                        }
                        console.log(`The reservation is in this month (${date})`);
                        return true;
                    } else {
                        alert("Invalid Date --> invalid day");
                        dateO.value = "";
                        return false;
                    }
                }
                console.log(`The reservation is in this year (${getMonthName(month)})`);
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
    let currentDate = new Date();
    let currentHours = currentDate.getHours();
    let currentMinutes = currentDate.getMinutes();
    // let currentTime = `${currentHours}:${currentMinutes}`;

    let hours = getHoursMinutes(time)[0];
    let minutes = getHoursMinutes(time)[1];


    if (hours >= currentHours) {
        if (hours == currentHours) {
            if (minutes >= currentMinutes) {
                console.log(`The reservation is today at the ${time}`);
                return true;
            } else {
                alert("Invalid Time --> minutes");
                timeO.value = "";
                return false;
            }
        }
        console.log(`The reservation is today at the ${time}`);
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
 * Check if the time inserted by the user, is consistent with the opening hours
 * @param {} dayName 
 * @returns true if the time is consistent
 */
function checkDayHour() {
    let result;
    function checks(map) {
        let hour = getHoursMinutes(time)[0];
        console.log(hour)
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
        console.log(`Time consistent with the resturant's schedule (${getHoursMinutes(time)[0]})`);
        return true;
    } else {
        alert(`Time is -not- consistent with the resturant's schdule`);
        timeO.value = "";
        return false;
    }

}

//----------------------- GLOBAL VARIABLES ----------------------- //
let dateO;//object date, inserted by user
let date;
let timeO;//object time, inserted by user
let time;
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

// ---------------------- EVENTS HANDLING ------------------------ //
submitButton = document.getElementById("submit-button");
formBook = document.getElementById("form");
dateButton = document.getElementById("date");
timeButton = document.getElementById("time");

dateButton.addEventListener("change", () => {
    checkDate();
    // console.log("The name of the day is: ", dayName);
})

timeButton.addEventListener("focusout", () => {
    timeO = document.getElementById("time");
    time = timeO.value;
    if (today) {
        checkTime();
        today = false;
    }
    checkDayHour();
});