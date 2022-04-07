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
        // m = input.match(regex).join(" -").length;
        // console.log(input.match(regex));
        m += input.match(regex).join("-").length;
    }
    return (m >= NUMBERS) ? true : false;
}

//----------------------- GLOBAL VARIABLES ----------------------- //
const MINCHARACTERS = 5;
const MAXCHARACTERS = 10;
const UPPERCASE = 1;
const LOWERCASE = 2;
const NUMBERS = 1;

// ---------------------- EVENTS HANDLING ------------------------ //
const passwordO = document.getElementById("pswd");
const formO = document.getElementById("form");
const submit = document.getElementById("submit-button");

passwordO.addEventListener("change", () => {
    let pswd = passwordO.value;
    
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
});

showO.addEventListener("click", ()=>{
    if (passwordO.type === "password") {
        passwordO.type = "text";
      } else {
        passwordO.type = "password";
      }
})