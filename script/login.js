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

//----------------------- GLOBAL VARIABLES ----------------------- //
const MINCHARACTERS = 5;
const MAXCHARACTERS = 10;
const UPPERCASE = 1;

// ---------------------- EVENTS HANDLING ------------------------ //
const passwordO = document.getElementById("pswd");

passwordO.addEventListener("focusout", () => {
    let pswd = passwordO.value;
    // console.log(pswd.length);
    if (!size(pswd)) {
        alert(`Wrong password! At least ${MINCHARACTERS} and maximum ${MAXCHARACTERS}`);
        return 0;
    }
    if (!upperCase(pswd)){
        alert(`Wrong password! At least ${UPPERCASE} characters in upper case`);
        return 0
    }
})