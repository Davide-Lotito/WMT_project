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

    if (day == "" || year == "" || day == "") {
        return 1;
    }

    if (year - currentYear >= 0) {
        if (month >= currentMonth) {
            if (month == currentMonth) {
                if (day >= currentDay) {
                } else {
                    alert("Invalid Date --> invalid day");
                    dateO.value = "";
                }
            }
        } else {
            alert("Invalid Date --> invalid month");
            dateO.value = "";
        }
    } else {
        alert("Invalid Date --> invalid year");
        dateO.value = "";
    }
}