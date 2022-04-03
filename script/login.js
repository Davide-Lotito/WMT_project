/**
 * Check if is empty
 * @param {*} input
 * @returns true if is not empty
 */
 function empty(input) {
    return (input == "") ? false : true;
}

/**
 * Check if password is bigger than MINCHARACTERS and
 * smaller than MAXCHARACTERS
 * @param {*} input
 * @returns true if is ok
 */
function size(input) {
    return ((input.length < MAXCHARACTERS) && (input.length >= MINCHARACTERS)) ? true : false;
}

/**
 * Check if the the password has at least UPPERCASE letter in upperCase
 * @param {*} input 
 * @returns true if is ok
 */
function upperCase(input) {
    let upper = 0;
    for (let i = 0; i < input.length; i++) {
        if (input.charAt(i) == input.charAt(i).toUpperCase()) {
            upper++;
        }
    }
    return (upper >= UPPERCASE) ? true : false;
}

/**
 * Check if the the password has at least LOWERCASE letter in lowercase
 * @param {*} input 
 * @returns true if is ok
 */
function lowerCase(input) {
    let lower = 0;
    for (let i = 0; i < input.length; i++) {
        if (input.charAt(i) == input.charAt(i).toLowerCase()) {
            lower++;
        }
    }
    return (lower >= LOWERCASE) ? true : false;
}

/**
 * Check if the password has at least NUMBERS numbers inside 
 * @param {*} input 
 * @returns 
 */
function numbers(input) {
    let regex = /\d+/;
    let m = 0;
    if (input.match(regex)) {
        m += input.match(regex).join("-").length;
    }
    return (m >= NUMBERS) ? true : false;
}

/**
 * Help to handle tha password's controls
 * @param {*} pswd 
 */
function helpCheckPassword(pswd){

    if (!size(pswd)) {
        alert(`Wrong password! At least ${MINCHARACTERS} and maximum ${MAXCHARACTERS}`);
        return 0;
    }
    if (!upperCase(pswd)) {
        alert(`Wrong password! At least ${UPPERCASE} characters in upper case`);
        return 0
    }
    if (!lowerCase(pswd)) {
        alert(`Wrong password! At least ${LOWERCASE} characters in lower case`);
        return 0
    }
    if (!numbers(pswd)) {
        alert(`Wrong password! At least ${NUMBERS} characters have to be numbers`);
        return 0
    }
}

/**
 * Check the length of the name
 * @param {*} name 
 * @returns 
 */
function isValidName(name) {
    if ((!(name.length >= 5 && name.length <= 15)) || empty(number)){
        alert(`Wrong name! Between 5-15 characters`);
        return false;
    } else {
        return true;
    }
}

//----------------------- GLOBAL VARIABLES ----------------------- //
const MINCHARACTERS = 5;
const MAXCHARACTERS = 10;
const UPPERCASE = 1;
const LOWERCASE = 2;
const NUMBERS = 1;

// ---------------------- EVENTS HANDLING ------------------------ //
const passwordO = document.getElementById("pswd");
const nameO = document.getElementById("name");
const showO = document.getElementById("show-pswd");

passwordO.addEventListener("change", () => {
    helpCheckPassword(passwordO.value);
});

nameO.addEventListener("change", () => {
    isValidName(nameO.value);
});

/**
 * Show the password field
 */
showO.addEventListener("click", () => {
    if (passwordO.type === "password") {
        passwordO.type = "text";
    } else {
        passwordO.type = "password";
    }
});