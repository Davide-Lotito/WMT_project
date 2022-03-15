/**
 * Check if password is bigger than MINCHARACTERS and
 * smaller than MAXCHARACTERS
 * @param {*} input
 * @returns true if is ok
 */
 function checks(input) {
    return ((input.length < MAXCHARACTERS)&&(input.length >= MINCHARACTERS )) ? true : false;
}

//----------------------- GLOBAL VARIABLES ----------------------- //
const MINCHARACTERS = 5;
const MAXCHARACTERS = 10;

// ---------------------- EVENTS HANDLING ------------------------ //
const passwordO = document.getElementById("pswd");

passwordO.addEventListener("focusout", ()=>{
    let pswd = passwordO.value;
    // console.log(pswd.length);
    if(!checks(pswd)){
        alert(`Wrong password! At least ${MINCHARACTERS} and maximum ${MAXCHARACTERS}`);
    }
})