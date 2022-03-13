function empty(inputtx) {
    if (inputtx.value.length == 0) {
        //alert("empty field");  	
        return false;
    }
    return true;
}

function checkDateTime() {
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
    if (empty(date)) {
        return false;
    }

    if (year - currentYear >= 0) {
        // console.log("Year is ok");
        if (month >= currentMonth) {
            // console.log("Month is ok");
            if (month == currentMonth) {
                if (day >= currentDay) {
                    // console.log("It is ok");
                    checkTime();
                } else {
                    alert("Invalid Date --> invalid day");
                    dateO.value = "";
                    return false;
                }
            }
            // console.log("It is ok");
            checkTime();
        } else {
            alert("Invalid Date --> invalid month");
            dateO.value = "";
            return false;
        }
    } else {
        alert("Invalid Date --> invalid year");
        dateO.value = "";
        return false;
    }
}

function checkTime() {
    let timeO = document.getElementById("time");
    let time = timeO.value;
    let currentDate = new Date();
    let currentHours = currentDate.getHours();
    let currentMinutes = currentDate.getMinutes();
    let currentTime = `${currentHours}:${currentMinutes}`;

    let hours = time.slice(0, 2);
    let minutes = time.slice(2);

    // if (time == "") {
    //     return null;
    // }
    if (empty(time)) {
        return false;
    }

    if (hours - currentHours >= 0) {
        // console.log("Time is ok");
        if (hours == currentHours) {
            if (minutes > currentMinutes) {
                // console.log("Time is ok");
                return true;
            } else {
                alert("Invalid Time --> hours");
                return false;
            }
        }
    } else {
        alert("Invalid Time --> hours");
        return false;
    }
}

submitButton = document.getElementById("submit-button")
nameButton = document.getElementById("name")

nameButton.addEventListener("click", ()=>{
    console.log('ciao');
})

submitButton.addEventListener("mouseover", ()=>{
    console.log('ciao');
})

// submitButton.onmouseover = function () {
//     // if (checkDateTime()) {
//     //     alert("valid")
//     //     return 1;
//     // }
//     // alert("invalid");
//     // return 0;
//     console.log('ciao');
// }